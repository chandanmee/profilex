import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiSave,
  FiArrowLeft,
  FiPlus,
  FiX,
  FiLink,
  FiFile,
  FiUpload,
  FiLock,
  FiUnlock,
  FiFolder,
  FiTag,
  FiExternalLink
} from 'react-icons/fi';

const KnowledgeEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: [],
    visibility: 'private',
    externalLinks: [],
    attachments: []
  });
  
  const [categories, setCategories] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [newLink, setNewLink] = useState({ title: '', url: '' });
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Mock categories
  const mockCategories = [
    { id: 1, name: 'Development', color: '#3B82F6' },
    { id: 2, name: 'Design', color: '#8B5CF6' },
    { id: 3, name: 'Business', color: '#10B981' },
    { id: 4, name: 'Research', color: '#F59E0B' },
    { id: 5, name: 'Tools', color: '#EF4444' }
  ];

  useEffect(() => {
    setCategories(mockCategories);
    if (isEditing) {
      loadKnowledgeEntry();
    }
  }, [id]);

  const loadKnowledgeEntry = async () => {
    setLoading(true);
    try {
      // Mock data - replace with actual API call
      const mockEntry = {
        id: 1,
        title: 'React Performance Optimization Techniques',
        content: `# React Performance Optimization

## Overview
This document covers various techniques for optimizing React application performance.

## Key Techniques

### 1. Memoization
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for function memoization

### 2. Code Splitting
- Dynamic imports
- React.lazy and Suspense
- Route-based splitting

### 3. Virtual Scrolling
- For large lists
- Libraries like react-window
- Intersection Observer API

## Implementation Examples

\`\`\`jsx
// React.memo example
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});

// useMemo example
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(props.data);
}, [props.data]);
\`\`\`

## Best Practices
1. Profile before optimizing
2. Use React DevTools Profiler
3. Measure performance impact
4. Consider bundle size implications

## Resources
- React documentation on performance
- Web.dev React performance guide
- Chrome DevTools performance tab`,
        category: 'Development',
        tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
        visibility: 'private',
        externalLinks: [
          { title: 'React Docs - Optimizing Performance', url: 'https://reactjs.org/docs/optimizing-performance.html' },
          { title: 'Web.dev React Performance', url: 'https://web.dev/react/' }
        ],
        attachments: ['react-performance-checklist.pdf', 'optimization-examples.js']
      };
      
      setFormData(mockEntry);
    } catch (error) {
      console.error('Error loading knowledge entry:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddLink = () => {
    if (newLink.title.trim() && newLink.url.trim()) {
      setFormData(prev => ({
        ...prev,
        externalLinks: [...prev.externalLinks, { ...newLink }]
      }));
      setNewLink({ title: '', url: '' });
      setShowLinkForm(false);
    }
  };

  const handleRemoveLink = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      externalLinks: prev.externalLinks.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileNames = files.map(file => file.name);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...fileNames]
    }));
  };

  const handleRemoveAttachment = (attachmentToRemove) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter(attachment => attachment !== attachmentToRemove)
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Mock API call - replace with actual API
      console.log('Saving knowledge entry:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/admin/knowledge');
    } catch (error) {
      console.error('Error saving knowledge entry:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/admin/knowledge')}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isEditing ? 'Edit Knowledge Entry' : 'New Knowledge Entry'}
            </h1>
          </div>
          
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg disabled:opacity-50"
          >
            <FiSave className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Entry'}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter knowledge entry title..."
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Visibility
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    checked={formData.visibility === 'private'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <FiLock className="w-4 h-4 mr-1 text-red-500" />
                  Private
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    checked={formData.visibility === 'public'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <FiUnlock className="w-4 h-4 mr-1 text-green-500" />
                  Public
                </label>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tags
              </label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Add tag..."
                />
                <button
                  onClick={handleAddTag}
                  className="px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-md text-sm"
                  >
                    <FiTag className="w-3 h-3 mr-1" />
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  External Links
                </label>
                <button
                  onClick={() => setShowLinkForm(true)}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              
              {showLinkForm && (
                <div className="mb-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <input
                    type="text"
                    value={newLink.title}
                    onChange={(e) => setNewLink(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-2"
                    placeholder="Link title..."
                  />
                  <input
                    type="url"
                    value={newLink.url}
                    onChange={(e) => setNewLink(prev => ({ ...prev, url: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-2"
                    placeholder="https://example.com"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => {
                        setShowLinkForm(false);
                        setNewLink({ title: '', url: '' });
                      }}
                      className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddLink}
                      className="px-3 py-1 bg-primary-500 hover:bg-primary-600 text-white rounded"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                {formData.externalLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <FiExternalLink className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {link.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {link.url}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveLink(index)}
                      className="text-red-500 hover:text-red-700 flex-shrink-0"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* File Attachments */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Attachments
                </label>
                <label className="cursor-pointer text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
                  <FiUpload className="w-4 h-4" />
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                {formData.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <FiFile className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {attachment}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveAttachment(attachment)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Editor */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full h-full resize-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent p-4 font-mono text-sm leading-relaxed"
              placeholder="Start writing your knowledge entry in Markdown..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeEditor;