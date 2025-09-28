import express from 'express';
import Blog from '../models/Blog.js';
import { protect, authorize, optionalAuth } from '../middleware/auth.js';
import { 
  validateBlog, 
  validateObjectId, 
  validateSlug, 
  validateBlogQuery 
} from '../middleware/validation.js';
import logger from '../utils/logger.js';
import { AppError, catchAsync } from '../middleware/errorHandler.js';

const router = express.Router();

// @desc    Get all blogs
// @route   GET /api/blog
// @access  Public
router.get('/', validateBlogQuery, catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    category,
    status,
    featured,
    search,
    sort = '-publishedAt'
  } = req.query;

  // Build query
  const query = {};
  
  // Handle status filtering based on user role
  if (req.user && req.user.role === 'admin') {
    // Admin can see all statuses or filter by specific status
    if (status && status !== 'all') {
      query.status = status;
    }
  } else {
    // Public users can only see published blogs
    query.status = 'published';
  }

  if (category) query.category = category;
  if (featured !== undefined) query.featured = featured === 'true';
  
  // Search functionality
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { excerpt: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
      { tags: { $in: [new RegExp(search, 'i')] } }
    ];
  }

  // Calculate pagination
  const skip = (parseInt(page) - 1) * parseInt(limit);
  
  // Execute query
  const blogs = await Blog.find(query)
    .select('-content') // Exclude full content for listing
    .sort(sort)
    .skip(skip)
    .limit(parseInt(limit));

  // Get total count for pagination
  const total = await Blog.countDocuments(query);
  const totalPages = Math.ceil(total / parseInt(limit));

  logger.info('Blogs fetched successfully', { 
    count: blogs.length, 
    total, 
    page: parseInt(page),
    userRole: req.user?.role || 'public'
  });

  res.status(200).json({
    success: true,
    count: blogs.length,
    total,
    totalPages,
    currentPage: parseInt(page),
    data: blogs
  });
}));

// @desc    Get single blog by ID
// @route   GET /api/blog/:id
// @access  Public
router.get('/:id', validateObjectId, optionalAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Check if user can access unpublished blogs
    if (blog.status !== 'published' && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views for published blogs
    if (blog.status === 'published') {
      await blog.incrementViews();
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog'
    });
  }
});

// @desc    Get single blog by slug
// @route   GET /api/blog/slug/:slug
// @access  Public
router.get('/slug/:slug', validateSlug, optionalAuth, async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Check if user can access unpublished blogs
    if (blog.status !== 'published' && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views for published blogs
    if (blog.status === 'published') {
      await blog.incrementViews();
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog'
    });
  }
});

// @desc    Get related blogs
// @route   GET /api/blog/:id/related
// @access  Public
router.get('/:id/related', validateObjectId, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    const relatedBlogs = await Blog.getRelatedBlogs(
      blog._id,
      blog.category,
      blog.tags,
      3
    );

    res.status(200).json({
      success: true,
      count: relatedBlogs.length,
      data: relatedBlogs
    });
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching related blogs'
    });
  }
});

// @desc    Create new blog
// @route   POST /api/blog
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), validateBlog, async (req, res) => {
  try {
    // Add author to blog data
    const blogData = {
      ...req.body,
      author: req.user.name
    };

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000 && error.keyPattern?.slug) {
      return res.status(400).json({
        success: false,
        message: 'A blog with this slug already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating blog'
    });
  }
});

// @desc    Update blog
// @route   PUT /api/blog/:id
// @access  Private (Admin only)
router.put('/:id', protect, authorize('admin'), validateObjectId, validateBlog, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Update blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000 && error.keyPattern?.slug) {
      return res.status(400).json({
        success: false,
        message: 'A blog with this slug already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating blog'
    });
  }
});

// @desc    Delete blog
// @route   DELETE /api/blog/:id
// @access  Private (Admin only)
router.delete('/:id', protect, authorize('admin'), validateObjectId, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog'
    });
  }
});

// @desc    Toggle blog like
// @route   POST /api/blog/:id/like
// @access  Public
router.post('/:id/like', validateObjectId, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    if (blog.status !== 'published') {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment likes
    blog.likes += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      message: 'Blog liked successfully',
      likes: blog.likes
    });
  } catch (error) {
    console.error('Error liking blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error liking blog'
    });
  }
});

// @desc    Get dashboard statistics
// @route   GET /api/blog/stats/dashboard
// @access  Private (Admin only)
router.get('/stats/dashboard', protect, authorize('admin'), catchAsync(async (req, res) => {
  try {
    // Get blog statistics
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: 'published' });
    const draftBlogs = await Blog.countDocuments({ status: 'draft' });
    const archivedBlogs = await Blog.countDocuments({ status: 'archived' });
    
    // Get total views across all blogs
    const viewsResult = await Blog.aggregate([
      { $group: { _id: null, totalViews: { $sum: '$views' } } }
    ]);
    const totalViews = viewsResult.length > 0 ? viewsResult[0].totalViews : 0;
    
    // Get recent activity (last 10 blog actions)
    const recentBlogs = await Blog.find()
      .sort({ updatedAt: -1 })
      .limit(5)
      .select('title status updatedAt createdAt publishedAt')
      .lean();
    
    // Format recent activity
    const recentActivity = recentBlogs.map(blog => {
      let action = 'Updated';
      let time = blog.updatedAt;
      
      // Determine the most recent action
      if (blog.status === 'published' && blog.publishedAt) {
        const publishTime = new Date(blog.publishedAt);
        const updateTime = new Date(blog.updatedAt);
        if (Math.abs(publishTime - updateTime) < 60000) { // Within 1 minute
          action = 'Published';
          time = blog.publishedAt;
        }
      } else if (blog.status === 'draft') {
        action = 'Saved as Draft';
      }
      
      return {
        type: 'blog',
        title: blog.title,
        action,
        time: formatTimeAgo(time)
      };
    });

    res.json({
      success: true,
      data: {
        stats: {
          totalBlogs,
          publishedBlogs,
          draftBlogs,
          archivedBlogs,
          totalViews,
          // Placeholder for other stats that might be added later
          knowledgeEntries: 0, // TODO: Implement when knowledge base is added
          mediaFiles: 0 // TODO: Implement when media manager is added
        },
        recentActivity
      }
    });
  } catch (error) {
    logger.error('Error fetching dashboard stats:', error);
    throw new AppError('Failed to fetch dashboard statistics', 500);
  }
}));

// Helper function to format time ago
function formatTimeAgo(date) {
  const now = new Date();
  const diffInMs = now - new Date(date);
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInMinutes < 60) {
    return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
  } else {
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  }
}

export default router;