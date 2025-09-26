import React, { useState, useEffect } from 'react';
import { getAllBlogs } from '../../api/blog';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiUser, FiTag, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogs();
        setBlogPosts(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        // Use sample data as fallback
        setBlogPosts([
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2023',
      excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-driven tools to new frameworks.',
      date: 'June 15, 2023',
      author: 'Chandan Mee',
      category: 'web-development',
      image: 'https://via.placeholder.com/800x450/4F46E5/FFFFFF?text=Web+Development+Trends',
      tags: ['Web Development', 'Trends', 'Technology'],
    },
    {
      id: 2,
      title: 'Optimizing Website Performance: A Comprehensive Guide',
      excerpt: 'Learn how to improve your website\'s speed and performance with practical tips on code optimization, image compression, and caching strategies.',
      date: 'May 22, 2023',
      author: 'Chandan Mee',
      category: 'performance',
      image: 'https://via.placeholder.com/800x450/0EA5E9/FFFFFF?text=Website+Performance',
      tags: ['Performance', 'Optimization', 'Web Development'],
    },
    {
      id: 3,
      title: 'Designing for Accessibility: Best Practices for Inclusive Web Design',
      excerpt: 'Discover how to create websites that are accessible to all users, including those with disabilities, and why accessibility should be a priority.',
      date: 'April 10, 2023',
      author: 'Chandan Mee',
      category: 'design',
      image: 'https://via.placeholder.com/800x450/10B981/FFFFFF?text=Accessibility+Design',
      tags: ['Accessibility', 'Design', 'Inclusion'],
    },
    {
      id: 4,
      title: 'The Power of Tailwind CSS: Building Modern UIs Efficiently',
      excerpt: 'Explore how Tailwind CSS can streamline your development process and help you build beautiful, responsive user interfaces with less code.',
      date: 'March 5, 2023',
      author: 'Chandan Mee',
      category: 'css',
      image: 'https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Tailwind+CSS',
      tags: ['CSS', 'Tailwind', 'Frontend'],
    },
    {
      id: 5,
      title: 'React vs. Vue vs. Angular: Choosing the Right Framework',
      excerpt: 'A comparative analysis of the three most popular frontend frameworks to help you decide which one is best suited for your next project.',
      date: 'February 18, 2023',
      author: 'Chandan Mee',
      category: 'frameworks',
      image: 'https://via.placeholder.com/800x450/EC4899/FFFFFF?text=Frontend+Frameworks',
      tags: ['React', 'Vue', 'Angular', 'Frameworks'],
    },
    {
      id: 6,
      title: 'SEO for Developers: Technical Optimizations for Better Rankings',
      excerpt: 'Learn the technical aspects of SEO that developers should implement to improve website visibility and search engine rankings.',
      date: 'January 30, 2023',
      author: 'Chandan Mee',
      category: 'seo',
      image: 'https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=SEO+for+Developers',
      tags: ['SEO', 'Technical', 'Rankings'],
    },
  ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'performance', name: 'Performance' },
    { id: 'design', name: 'Design' },
    { id: 'css', name: 'CSS' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'seo', name: 'SEO' },
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Blog & <span className="text-primary-600 dark:text-primary-400">Articles</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  />
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-gray-400" />
                </div>
              </div>
              <div className="md:w-1/3">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Loading State */}
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-dark-600 dark:text-gray-300">Loading blog posts...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-dark-900 dark:text-white mb-2">
                Error Loading Blog Posts
              </h3>
              <p className="text-dark-600 dark:text-gray-300">{error}</p>
            </motion.div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="card overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-dark-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiUser className="mr-1" /> {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                      {post.title}
                    </h2>
                    <p className="text-dark-600 dark:text-gray-300 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                        >
                          <FiTag className="mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                    >
                      Read More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-dark-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-dark-600 dark:text-gray-300">
                Try adjusting your search or filter to find what you\'re looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to My Newsletter</h2>
            <p className="text-xl mb-8">
              Stay updated with the latest articles, tutorials, and insights on web development and design.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-900"
                required
              />
              <button
                type="submit"
                className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm opacity-80">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;