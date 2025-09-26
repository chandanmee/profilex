import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiPlus,
  FiEdit3,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiSearch,
  FiFilter,
  FiCalendar,
  FiTag,
  FiMoreVertical
} from 'react-icons/fi';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API calls
  const mockBlogs = [
    {
      id: 1,
      title: 'React Best Practices for 2024',
      slug: 'react-best-practices-2024',
      status: 'published',
      tags: ['React', 'JavaScript', 'Best Practices'],
      date: '2024-01-15',
      views: 245,
      excerpt: 'Learn the latest React best practices and patterns for building modern applications.'
    },
    {
      id: 2,
      title: 'Building Scalable Node.js Applications',
      slug: 'building-scalable-nodejs-applications',
      status: 'draft',
      tags: ['Node.js', 'Backend', 'Scalability'],
      date: '2024-01-10',
      views: 0,
      excerpt: 'A comprehensive guide to building scalable Node.js applications with proper architecture.'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use What',
      slug: 'css-grid-vs-flexbox',
      status: 'published',
      tags: ['CSS', 'Layout', 'Frontend'],
      date: '2024-01-08',
      views: 189,
      excerpt: 'Understanding the differences between CSS Grid and Flexbox and when to use each.'
    },
    {
      id: 4,
      title: 'TypeScript Advanced Types',
      slug: 'typescript-advanced-types',
      status: 'draft',
      tags: ['TypeScript', 'JavaScript', 'Types'],
      date: '2024-01-05',
      views: 0,
      excerpt: 'Exploring advanced TypeScript types and their practical applications.'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBlogs(mockBlogs);
      setFilteredBlogs(mockBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [searchTerm, statusFilter, tagFilter, blogs]);

  // Enhanced filtering function
  const filterBlogs = () => {
    let filtered = blogs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog => blog.status === statusFilter);
    }

    // Tag filter
    if (tagFilter && tagFilter !== 'all') {
      filtered = filtered.filter(blog =>
        blog.tags.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase()))
      );
    }

    // Author filter
    if (authorFilter !== 'all') {
      filtered = filtered.filter(blog => blog.author === authorFilter);
    }

    // Date range filter
    if (dateRange.start) {
      filtered = filtered.filter(blog => new Date(blog.date) >= new Date(dateRange.start));
    }
    if (dateRange.end) {
      filtered = filtered.filter(blog => new Date(blog.date) <= new Date(dateRange.end));
    }

    // Sort blogs
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'views':
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        default: // date
          aValue = new Date(a.date);
          bValue = new Date(b.date);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredBlogs(filtered);
  };

  const handleStatusChange = async (blogId, newStatus) => {
    try {
      // Update blog status - replace with actual API call
      setBlogs(blogs.map(blog =>
        blog.id === blogId ? { ...blog, status: newStatus } : blog
      ));
    } catch (error) {
      console.error('Error updating blog status:', error);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        // Delete blog - replace with actual API call
        setBlogs(blogs.filter(blog => blog.id !== blogId));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const getAllTags = () => {
    const allTags = blogs.flatMap(blog => blog.tags);
    return [...new Set(allTags)];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Blog Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your blog posts, drafts, and publications
            </p>
          </div>
          <Link
            to="/admin/blog/new"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
          >
            <FiPlus className="w-5 h-5 mr-2" />
            New Blog Post
          </Link>
        </motion.div>

        {/* Enhanced Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div className="flex flex-col space-y-4">
            {/* Primary Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>

                {/* Tag Filter */}
                <input
                  type="text"
                  placeholder="Filter by tags..."
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent w-48"
                />
              </div>

              <div className="flex items-center space-x-4">
                {/* Advanced Filters Toggle */}
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <FiFilter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </button>

                {/* Sort Controls */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="status">Sort by Status</option>
                  <option value="views">Sort by Views</option>
                </select>

                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Author Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Author
                    </label>
                    <select
                      value={authorFilter}
                      onChange={(e) => setAuthorFilter(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="all">All Authors</option>
                      <option value="Chandan Kumar">Chandan Kumar</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  {/* Date Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      From Date
                    </label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      To Date
                    </label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                      setTagFilter('');
                      setAuthorFilter('all');
                      setDateRange({ start: '', end: '' });
                      setSortBy('date');
                      setSortOrder('desc');
                    }}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    Clear All Filters
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Blog List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {filteredBlogs.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">No blog posts found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Tags
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {blog.excerpt}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.status === 'published'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {blog.status === 'published' ? <FiEye className="w-3 h-3 mr-1" /> : <FiEyeOff className="w-3 h-3 mr-1" />}
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                            >
                              <FiTag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 2 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              +{blog.tags.length - 2} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <FiCalendar className="w-4 h-4 mr-2" />
                          {new Date(blog.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {blog.views}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Link
                            to={`/admin/blog/edit/${blog.id}`}
                            className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            <FiEdit3 className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleStatusChange(blog.id, blog.status === 'published' ? 'draft' : 'published')}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {blog.status === 'published' ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogManager;