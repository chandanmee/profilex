import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiEdit3,
  FiBookOpen,
  FiDatabase,
  FiImage,
  FiUsers,
  FiTrendingUp,
  FiEye,
  FiFileText,
  FiFolder,
  FiPlus,
  FiSettings
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    knowledgeEntries: 0,
    totalViews: 0,
    mediaFiles: 0
  });

  useEffect(() => {
    // Fetch dashboard stats
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Mock data for now - replace with actual API calls
      setStats({
        totalBlogs: 12,
        publishedBlogs: 8,
        draftBlogs: 4,
        knowledgeEntries: 25,
        totalViews: 1250,
        mediaFiles: 45
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const quickActions = [
    {
      title: 'New Blog Post',
      description: 'Create a new blog post',
      icon: FiEdit3,
      link: '/admin/blog-editor',
      color: 'bg-primary-500',
      hoverColor: 'hover:bg-primary-600'
    },
    {
      title: 'Add Knowledge',
      description: 'Add new knowledge entry',
      icon: FiDatabase,
      link: '/admin/knowledge-editor',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      title: 'Upload Media',
      description: 'Upload images and files',
      icon: FiImage,
      link: '/admin/media-manager',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      title: 'Settings',
      description: 'Manage CMS settings',
      icon: FiSettings,
      link: '/admin/settings',
      color: 'bg-gray-500',
      hoverColor: 'hover:bg-gray-600'
    }
  ];

  const modules = [
    {
      title: 'Blog Management',
      description: 'Manage blog posts, drafts, and publications',
      icon: FiBookOpen,
      link: '/admin/blog-manager',
      stats: `${stats.publishedBlogs} Published, ${stats.draftBlogs} Drafts`,
      color: 'border-primary-200 dark:border-primary-800'
    },
    {
      title: 'Knowledge Base',
      description: 'Manage private references and knowledge entries',
      icon: FiDatabase,
      link: '/admin/knowledge-manager',
      stats: `${stats.knowledgeEntries} Entries`,
      color: 'border-green-200 dark:border-green-800'
    },
    {
      title: 'Media Manager',
      description: 'Upload and manage images, files, and assets',
      icon: FiImage,
      link: '/admin/media-manager',
      stats: `${stats.mediaFiles} Files`,
      color: 'border-blue-200 dark:border-blue-800'
    }
  ];

  const recentActivity = [
    { type: 'blog', title: 'React Best Practices', action: 'Published', time: '2 hours ago' },
    { type: 'knowledge', title: 'API Documentation Tools', action: 'Created', time: '1 day ago' },
    { type: 'blog', title: 'JavaScript ES2024 Features', action: 'Saved as Draft', time: '2 days ago' },
    { type: 'media', title: 'hero-image.jpg', action: 'Uploaded', time: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your content.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Total Blogs</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.totalBlogs}</p>
              </div>
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <FiFileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Published</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.publishedBlogs}</p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <FiEye className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Knowledge</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.knowledgeEntries}</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FiDatabase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Total Views</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.totalViews}</p>
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <FiTrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className={`${action.color} ${action.hoverColor} text-white rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <div className="flex items-center space-x-3">
                    <action.icon className="w-6 h-6" />
                    <div>
                      <h3 className="text-sm font-semibold">{action.title}</h3>
                      <p className="text-xs opacity-90">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CMS Modules */}
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">CMS Modules</h2>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <Link
                  key={index}
                  to={module.link}
                  className={`block bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border-2 ${module.color} hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <module.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{module.title}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{module.description}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{module.stats}</p>
                      </div>
                    </div>
                    <FiPlus className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Activity</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'blog' ? 'bg-primary-100 dark:bg-primary-900' :
                      activity.type === 'knowledge' ? 'bg-green-100 dark:bg-green-900' :
                      'bg-blue-100 dark:bg-blue-900'
                    }`}>
                      {activity.type === 'blog' ? (
                        <FiFileText className={`w-3 h-3 ${
                          activity.type === 'blog' ? 'text-primary-600 dark:text-primary-400' :
                          activity.type === 'knowledge' ? 'text-green-600 dark:text-green-400' :
                          'text-blue-600 dark:text-blue-400'
                        }`} />
                      ) : activity.type === 'knowledge' ? (
                        <FiDatabase className="w-3 h-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <FiImage className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{activity.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;