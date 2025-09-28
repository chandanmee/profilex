import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiSave,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiImage,
  FiLink,
  FiCode,
  FiType,
  FiList,
  FiHash,
  FiX,
  FiPlus
} from 'react-icons/fi';
import { createBlog, updateBlog, getBlogById } from '../../api/blog.js';

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'Technology',
    tags: [],
    status: 'draft',
    featuredImage: '',
    metaDescription: ''
  });
  
  const [showPreview, setShowPreview] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      loadBlogPost();
    }
  }, [id]);

  useEffect(() => {
    // Auto-generate slug from title
    if (formData.title && !isEditing) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, isEditing]);

  const loadBlogPost = async () => {
    setLoading(true);
    try {
      const response = await getBlogById(id);
      const blog = response.data;
      
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        category: blog.category || 'Technology',
        tags: blog.tags || [],
        status: blog.status || 'draft',
        featuredImage: blog.featuredImage || '',
        metaDescription: blog.metaDescription || ''
      });
    } catch (error) {
      console.error('Error loading blog post:', error);
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

  const handleSave = async (status = formData.status) => {
    setSaving(true);
    try {
      const blogData = { ...formData, status };
      
      console.log('Attempting to save blog with data:', blogData);
      console.log('Is editing:', isEditing);
      console.log('Blog ID:', id);
      
      let response;
      if (isEditing) {
        console.log('Calling updateBlog API...');
        response = await updateBlog(id, blogData);
      } else {
        console.log('Calling createBlog API...');
        response = await createBlog(blogData);
      }
      
      console.log('Blog saved successfully:', response);
      
      // Show success message or stay on page for better UX
      if (response.success) {
        alert(`Blog ${status === 'published' ? 'published' : 'saved as draft'} successfully!`);
        // Optionally navigate back to blog manager
        // navigate('/admin/blog-manager');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert(`Error ${status === 'published' ? 'publishing' : 'saving'} blog: ${error.message || 'Unknown error'}`);
    } finally {
      setSaving(false);
    }
  };

  const insertMarkdown = (syntax) => {
    const textarea = document.getElementById('content-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);
    
    // Helper function to check if text is already a heading
    const isHeading = (text, level) => {
      const patterns = {
        'h2': /^## /,
        'h3': /^### /,
        'h4': /^#### /
      };
      return patterns[level] && patterns[level].test(text.trim());
    };
    
    // Helper function to remove heading syntax
    const removeHeadingSyntax = (text, level) => {
      const patterns = {
        'h2': /^## /,
        'h3': /^### /,
        'h4': /^#### /
      };
      return text.replace(patterns[level], '');
    };
    
    // Helper function to add proper spacing before headings
    const addSpacingBeforeHeading = (beforeText, headingText) => {
      // If there's content before and it doesn't end with double newlines, add proper spacing
      if (beforeText.trim() && !beforeText.endsWith('\n\n')) {
        if (beforeText.endsWith('\n')) {
          return beforeText + '\n' + headingText;
        } else {
          return beforeText + '\n\n' + headingText;
        }
      }
      return beforeText + headingText;
    };
    
    let newText = '';
    let newContent = '';
    let cursorPosition = start;
    
    switch (syntax) {
      case 'bold':
        newText = `**${selectedText || 'bold text'}**`;
        break;
      case 'italic':
        newText = `*${selectedText || 'italic text'}*`;
        break;
      case 'code':
        newText = `\`${selectedText || 'code'}\``;
        break;
      case 'link':
        newText = `[${selectedText || 'link text'}](url)`;
        break;
      case 'image':
        newText = `![${selectedText || 'alt text'}](image-url)`;
        break;
      case 'heading':
        newText = `## ${selectedText || 'Heading'}`;
        break;
      case 'h2':
      case 'h3':
      case 'h4':
        // Check if selected text is already a heading of this level
        if (selectedText && isHeading(selectedText, syntax)) {
          // Remove heading syntax
          newText = removeHeadingSyntax(selectedText, syntax);
          newContent = beforeText + newText + afterText;
          cursorPosition = start + newText.length;
        } else {
          // Add heading syntax with proper spacing
          const headingPrefix = syntax === 'h2' ? '## ' : syntax === 'h3' ? '### ' : '#### ';
          const headingText = headingPrefix + (selectedText || `Heading ${syntax.toUpperCase().slice(1)}`);
          
          // Add proper spacing before heading
          newContent = addSpacingBeforeHeading(beforeText, headingText) + afterText;
          
          // Calculate cursor position accounting for added spacing
          const spacingAdded = newContent.length - (beforeText.length + headingText.length + afterText.length);
          cursorPosition = start + headingText.length + spacingAdded;
        }
        break;
      case 'list':
        newText = `- ${selectedText || 'List item'}`;
        break;
      default:
        return;
    }
    
    // For non-heading cases, use the original logic
    if (!['h2', 'h3', 'h4'].includes(syntax)) {
      newContent = beforeText + newText + afterText;
      cursorPosition = start + newText.length;
    }
    
    setFormData(prev => ({ ...prev, content: newContent }));
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
  };

  const renderMarkdownPreview = (content) => {
    // Simple markdown to HTML conversion (in production, use a proper markdown parser)
    return content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/`(.*)`/gim, '<code>$1</code>')
      .replace(/\n/gim, '<br>');
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
              onClick={() => navigate('/admin/blog')}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isEditing ? 'Edit Blog Post' : 'New Blog Post'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {showPreview ? <FiEyeOff className="w-4 h-4 mr-2" /> : <FiEye className="w-4 h-4 mr-2" />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg disabled:opacity-50"
            >
              <FiSave className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            
            <button
              onClick={() => handleSave('published')}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg disabled:opacity-50"
            >
              <FiSave className="w-4 h-4 mr-2" />
              {saving ? 'Publishing...' : 'Publish'}
            </button>
          </div>
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
                placeholder="Enter blog title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="url-friendly-slug"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Brief description..."
              />
            </div>

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
                <option value="Technology">Technology</option>
                <option value="Web Development">Web Development</option>
                <option value="Programming">Programming</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
              </select>
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

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="SEO meta description..."
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Editor */}
          <div className={`${showPreview ? 'w-1/2' : 'w-full'} flex flex-col`}>
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => insertMarkdown('bold')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Bold"
                >
                  <FiType className="w-4 h-4 font-bold" />
                </button>
                <button
                  onClick={() => insertMarkdown('italic')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Italic"
                >
                  <FiType className="w-4 h-4 italic" />
                </button>
                <button
                  onClick={() => insertMarkdown('code')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Code"
                >
                  <FiCode className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('link')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Link"
                >
                  <FiLink className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('image')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Image"
                >
                  <FiImage className="w-4 h-4" />
                </button>
                
                {/* Heading Buttons */}
                <div className="border-l border-gray-300 dark:border-gray-600 pl-2 ml-2">
                  <button
                    onClick={() => insertMarkdown('h2')}
                    className="px-2 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    title="Heading 2"
                  >
                    H2
                  </button>
                  <button
                    onClick={() => insertMarkdown('h3')}
                    className="px-2 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 ml-1"
                    title="Heading 3"
                  >
                    H3
                  </button>
                  <button
                    onClick={() => insertMarkdown('h4')}
                    className="px-2 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 ml-1"
                    title="Heading 4"
                  >
                    H4
                  </button>
                </div>
                
                <button
                  onClick={() => insertMarkdown('list')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="List"
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Editor */}
            <div className="flex-1 p-6">
              <textarea
                id="content-editor"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full h-full resize-none border-none outline-none bg-transparent text-gray-900 dark:text-white font-mono text-sm leading-relaxed"
                placeholder="Start writing your blog post in Markdown..."
              />
            </div>
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="w-1/2 border-l border-gray-200 dark:border-gray-700">
              <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</h3>
              </div>
              <div className="p-6 overflow-y-auto h-full">
                <div 
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: renderMarkdownPreview(formData.content) 
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;