import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiPlus,
  FiEdit3,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiFolder,
  FiFile,
  FiLock,
  FiUnlock,
  FiExternalLink,
  FiTag,
  FiCalendar,
  FiMoreVertical,
  FiGrid,
  FiList,
  FiBookOpen
} from 'react-icons/fi';

const KnowledgeManager = () => {
  const [knowledgeEntries, setKnowledgeEntries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [visibilityFilter, setVisibilityFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Mock data - replace with actual API calls
  const mockCategories = [
    { id: 1, name: 'Development', color: '#3B82F6', count: 12 },
    { id: 2, name: 'Design', color: '#8B5CF6', count: 8 },
    { id: 3, name: 'Business', color: '#10B981', count: 5 },
    { id: 4, name: 'Research', color: '#F59E0B', count: 15 },
    { id: 5, name: 'Tools', color: '#EF4444', count: 7 }
  ];

  const mockKnowledgeEntries = [
    {
      id: 1,
      title: 'React Performance Optimization Techniques',
      content: 'Comprehensive guide on optimizing React applications including memoization, code splitting, and lazy loading.',
      category: 'Development',
      categoryId: 1,
      tags: ['React', 'Performance', 'Optimization'],
      visibility: 'private',
      externalLinks: [
        { title: 'React Docs', url: 'https://reactjs.org/docs' },
        { title: 'Performance Guide', url: 'https://web.dev/react' }
      ],
      attachments: ['react-performance-checklist.pdf'],
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'UI/UX Design Principles',
      content: 'Essential design principles for creating user-friendly interfaces and improving user experience.',
      category: 'Design',
      categoryId: 2,
      tags: ['UI', 'UX', 'Design', 'Principles'],
      visibility: 'public',
      externalLinks: [
        { title: 'Design Systems', url: 'https://designsystems.com' }
      ],
      attachments: [],
      createdAt: '2024-01-12',
      updatedAt: '2024-01-14'
    },
    {
      id: 3,
      title: 'API Design Best Practices',
      content: 'Guidelines for designing RESTful APIs including naming conventions, status codes, and documentation.',
      category: 'Development',
      categoryId: 1,
      tags: ['API', 'REST', 'Backend', 'Best Practices'],
      visibility: 'private',
      externalLinks: [
        { title: 'REST API Tutorial', url: 'https://restfulapi.net' },
        { title: 'OpenAPI Spec', url: 'https://swagger.io/specification' }
      ],
      attachments: ['api-design-checklist.md'],
      createdAt: '2024-01-10',
      updatedAt: '2024-01-13'
    },
    {
      id: 4,
      title: 'Market Research Methodologies',
      content: 'Different approaches to conducting market research including surveys, interviews, and data analysis.',
      category: 'Research',
      categoryId: 4,
      tags: ['Market Research', 'Analysis', 'Methodology'],
      visibility: 'public',
      externalLinks: [],
      attachments: ['research-template.xlsx'],
      createdAt: '2024-01-08',
      updatedAt: '2024-01-08'
    },
    {
      id: 5,
      title: 'Development Tools Setup',
      content: 'Complete setup guide for development environment including VS Code extensions, terminal configuration, and productivity tools.',
      category: 'Tools',
      categoryId: 5,
      tags: ['Tools', 'Setup', 'Development', 'Productivity'],
      visibility: 'private',
      externalLinks: [
        { title: 'VS Code Extensions', url: 'https://marketplace.visualstudio.com' }
      ],
      attachments: ['vscode-settings.json', 'terminal-config.sh'],
      createdAt: '2024-01-05',
      updatedAt: '2024-01-11'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCategories(mockCategories);
      setKnowledgeEntries(mockKnowledgeEntries);
      setFilteredEntries(mockKnowledgeEntries);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterEntries();
  }, [searchTerm, categoryFilter, visibilityFilter, knowledgeEntries]);

  // Enhanced filtering function
  const filterEntries = () => {
    let filtered = knowledgeEntries;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(entry => entry.category === categoryFilter);
    }

    // Visibility filter
    if (visibilityFilter !== 'all') {
      filtered = filtered.filter(entry => entry.visibility === visibilityFilter);
    }

    // Tag filter
    if (tagFilter) {
      filtered = filtered.filter(entry =>
        entry.tags.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase()))
      );
    }

    // Date range filter
    if (dateRange.start) {
      filtered = filtered.filter(entry => new Date(entry.createdAt) >= new Date(dateRange.start));
    }
    if (dateRange.end) {
      filtered = filtered.filter(entry => new Date(entry.createdAt) <= new Date(dateRange.end));
    }

    // Sort entries
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case 'visibility':
          aValue = a.visibility;
          bValue = b.visibility;
          break;
        case 'views':
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        default: // date
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredEntries(filtered);
  };

  const handleDelete = async (entryId) => {
    if (window.confirm('Are you sure you want to delete this knowledge entry?')) {
      try {
        setKnowledgeEntries(entries => entries.filter(entry => entry.id !== entryId));
      } catch (error) {
        console.error('Error deleting knowledge entry:', error);
      }
    }
  };

  const handleToggleVisibility = async (entryId) => {
    try {
      setKnowledgeEntries(entries =>
        entries.map(entry =>
          entry.id === entryId
            ? { ...entry, visibility: entry.visibility === 'private' ? 'public' : 'private' }
            : entry
        )
      );
    } catch (error) {
      console.error('Error updating visibility:', error);
    }
  };

  const handleCreateCategory = async () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Date.now(),
        name: newCategoryName.trim(),
        color: '#6B7280',
        count: 0
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setShowNewCategory(false);
    }
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : '#6B7280';
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
              Knowledge Base
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Organize and manage your knowledge entries and references
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={() => setShowNewCategory(true)}
              className="inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FiFolder className="w-4 h-4 mr-2" />
              New Category
            </button>
            <Link
              to="/admin/knowledge/new"
              className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
            >
              <FiPlus className="w-5 h-5 mr-2" />
              New Entry
            </Link>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setCategoryFilter(category.name)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                  categoryFilter === category.name
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 shadow-lg shadow-primary-500/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Color indicator and count */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: category.color }}
                    />
                    <div
                      className="absolute inset-0 w-4 h-4 rounded-full opacity-30 animate-pulse"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    categoryFilter === category.name
                      ? 'bg-primary-200 text-primary-800 dark:bg-primary-800 dark:text-primary-200'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </div>
                </div>

                {/* Category name */}
                <h3 className={`font-semibold text-left mb-2 transition-colors duration-200 ${
                  categoryFilter === category.name
                    ? 'text-primary-900 dark:text-primary-100'
                    : 'text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300'
                }`}>
                  {category.name}
                </h3>

                {/* Subtle description or visual element */}
                <div className={`h-1 rounded-full transition-all duration-300 ${
                  categoryFilter === category.name
                    ? 'bg-primary-400 dark:bg-primary-500'
                    : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-primary-300 dark:group-hover:bg-primary-600'
                }`} />

                {/* Active indicator */}
                {categoryFilter === category.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                    placeholder="Search knowledge base..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>

                {/* Visibility Filter */}
                <select
                  value={visibilityFilter}
                  onChange={(e) => setVisibilityFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Visibility</option>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
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
                  className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <FiFilter className="w-4 h-4 mr-2" />
                  Filters
                </button>

                {/* Sort Controls */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="category">Sort by Category</option>
                  <option value="visibility">Sort by Visibility</option>
                  <option value="views">Sort by Views</option>
                </select>

                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  >
                    <FiGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  >
                    <FiList className="w-4 h-4" />
                  </button>
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      setCategoryFilter('all');
                      setVisibilityFilter('all');
                      setTagFilter('');
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

        {/* Knowledge Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredEntries.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
              <FiBookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No knowledge entries found.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getCategoryColor(entry.category) }}
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {entry.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {entry.visibility === 'private' ? (
                        <FiLock className="w-4 h-4 text-red-500" />
                      ) : (
                        <FiUnlock className="w-4 h-4 text-green-500" />
                      )}
                      <div className="relative">
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <FiMoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {entry.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {entry.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        <FiTag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {entry.tags.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{entry.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* External Links */}
                  {entry.externalLinks.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                        External Links
                      </h4>
                      <div className="space-y-1">
                        {entry.externalLinks.slice(0, 2).map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                          >
                            <FiExternalLink className="w-3 h-3 mr-1" />
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Attachments */}
                  {entry.attachments.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Attachments ({entry.attachments.length})
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FiFile className="w-4 h-4 mr-1" />
                        {entry.attachments[0]}
                        {entry.attachments.length > 1 && (
                          <span className="ml-1">+{entry.attachments.length - 1} more</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(entry.updatedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/admin/knowledge/edit/${entry.id}`}
                        className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <FiEdit3 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleToggleVisibility(entry.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {entry.visibility === 'private' ? <FiUnlock className="w-4 h-4" /> : <FiLock className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* New Category Modal */}
        {showNewCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Create New Category
              </h3>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
                onKeyPress={(e) => e.key === 'Enter' && handleCreateCategory()}
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowNewCategory(false);
                    setNewCategoryName('');
                  }}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateCategory}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
                >
                  Create
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeManager;