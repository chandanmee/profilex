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

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
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
      // Mock data - replace with actual API call
      const mockBlog = {
        id: 1,
        title: 'React Best Practices for 2024',
        slug: 'react-best-practices-2024',
        content: `# React Best Practices for 2024

React continues to evolve, and with it, the best practices for building modern applications. Here are the key practices you should follow in 2024.

## 1. Use Functional Components and Hooks

Functional components with hooks are now the standard way to write React components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
\`\`\`

## 2. Optimize Performance

Use React.memo, useMemo, and useCallback to optimize your components:

- **React.memo**: Prevents unnecessary re-renders
- **useMemo**: Memoizes expensive calculations
- **useCallback**: Memoizes functions

## 3. Error Boundaries

Always implement error boundaries to catch JavaScript errors:

\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
\`\`\`

## Conclusion

Following these best practices will help you build more maintainable and performant React applications in 2024.`,
        excerpt: 'Learn the latest React best practices and patterns for building modern applications.',
        tags: ['React', 'JavaScript', 'Best Practices'],
        status: 'published',
        featuredImage: '',
        metaDescription: 'Comprehensive guide to React best practices for 2024 including hooks, performance optimization, and error handling.'
      };
      
      setFormData(mockBlog);
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
      
      // Mock API call - replace with actual API
      console.log('Saving blog:', blogData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setSaving(false);
    }
  };

  const insertMarkdown = (syntax) => {
    const textarea = document.getElementById('content-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let newText = '';
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
      case 'list':
        newText = `- ${selectedText || 'List item'}`;
        break;
      default:
        return;
    }
    
    const newContent = 
      textarea.value.substring(0, start) + 
      newText + 
      textarea.value.substring(end);
    
    setFormData(prev => ({ ...prev, content: newContent }));
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + newText.length, start + newText.length);
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
                <button
                  onClick={() => insertMarkdown('heading')}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Heading"
                >
                  <FiHash className="w-4 h-4" />
                </button>
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