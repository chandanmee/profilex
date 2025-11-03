# Component Patterns & Best Practices

## Table of Contents
1. [Component Architecture](#component-architecture)
2. [Design Patterns Used](#design-patterns-used)
3. [Component Examples](#component-examples)
4. [Styling Patterns](#styling-patterns)
5. [Performance Patterns](#performance-patterns)
6. [Testing Patterns](#testing-patterns)

---

## Component Architecture

### 📁 Component Organization
```
src/components/
├── sections/          # Page sections (Hero, Projects, etc.)
├── reactbits/         # Reusable UI components
├── Navbar.jsx         # Navigation component
├── Footer.jsx         # Footer component
├── CustomCursor.jsx   # Interactive cursor
└── ProtectedRoute.jsx # Route protection HOC
```

### 🏗️ Component Hierarchy
```
App
├── AuthProvider (Context)
├── ThemeProvider (Context)
├── Navbar
├── Routes
│   ├── Public Pages (Home, About, Projects, Blog)
│   └── Protected Routes
│       └── Admin Components
└── Footer
```

---

## Design Patterns Used

### 1. **Higher-Order Component (HOC) Pattern**

#### ProtectedRoute HOC
```javascript
// src/components/ProtectedRoute.jsx
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render protected content
  return children;
};
```

**Benefits:**
- ✅ Reusable authentication logic
- ✅ Consistent loading states
- ✅ Automatic redirects with location state

### 2. **Provider Pattern (Context API)**

#### AuthProvider Implementation
```javascript
// src/context/AuthContext.jsx
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize authentication on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = getAuthToken();
        if (token && checkAuthToken()) {
          const userData = await getCurrentUser();
          setUser(userData.data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        removeAuthToken();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 3. **Custom Hook Pattern**

#### useAuth Hook
```javascript
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

#### useTheme Hook
```javascript
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### 4. **Container/Presentational Pattern**

#### Blog Management Example
```javascript
// Container Component (Logic)
const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await getAllBlogs();
      setBlogs(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Render presentational component
  return (
    <BlogList 
      blogs={blogs}
      loading={loading}
      error={error}
      onRefresh={fetchBlogs}
    />
  );
};

// Presentational Component (UI)
const BlogList = ({ blogs, loading, error, onRefresh }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={onRefresh} />;
  
  return (
    <div className="grid gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
```

---

## Component Examples

### 1. **Navbar Component**

```javascript
// src/components/Navbar.jsx
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Navigation content */}
    </nav>
  );
};
```

**Patterns Used:**
- ✅ State management with `useState`
- ✅ Side effects with `useEffect`
- ✅ Context consumption with custom hooks
- ✅ Conditional styling based on state
- ✅ Event listeners with cleanup

### 2. **Form Component Pattern**

```javascript
// Contact Form Example
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Generic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      {/* More fields */}
      <SubmitButton 
        isSubmitting={isSubmitting}
        disabled={!formData.name || !formData.email}
      >
        Send Message
      </SubmitButton>
    </form>
  );
};
```

### 3. **Modal Component Pattern**

```javascript
// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FiX size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
```

---

## Styling Patterns

### 1. **Tailwind CSS Utility Classes**

```javascript
// Responsive design with Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>

// Dark mode support
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  {/* Content */}
</div>

// Interactive states
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors">
  Click me
</button>
```

### 2. **Conditional Styling**

```javascript
// Dynamic classes based on state
const buttonClasses = `
  px-6 py-3 rounded-lg font-medium transition-all duration-200
  ${variant === 'primary' 
    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  }
  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  ${size === 'large' ? 'text-lg px-8 py-4' : 'text-sm'}
`;
```

### 3. **Animation Patterns**

```javascript
// Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>

// Stagger animations for lists
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {/* Item content */}
    </motion.div>
  ))}
</motion.div>
```

---

## Performance Patterns

### 1. **React.memo for Component Memoization**

```javascript
// Memoize expensive components
const BlogCard = React.memo(({ blog, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <div className="flex gap-2 mt-4">
        <button onClick={() => onEdit(blog.id)}>Edit</button>
        <button onClick={() => onDelete(blog.id)}>Delete</button>
      </div>
    </div>
  );
});

// Custom comparison function
const BlogCard = React.memo(({ blog }) => {
  // Component implementation
}, (prevProps, nextProps) => {
  return prevProps.blog.id === nextProps.blog.id &&
         prevProps.blog.updatedAt === nextProps.blog.updatedAt;
});
```

### 2. **useMemo for Expensive Calculations**

```javascript
const BlogList = ({ blogs, searchTerm, sortBy }) => {
  // Memoize filtered and sorted blogs
  const processedBlogs = useMemo(() => {
    let filtered = blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [blogs, searchTerm, sortBy]);

  return (
    <div>
      {processedBlogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
```

### 3. **useCallback for Function Memoization**

```javascript
const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);

  // Memoize callback functions
  const handleEdit = useCallback((blogId) => {
    navigate(`/admin/blog/edit/${blogId}`);
  }, [navigate]);

  const handleDelete = useCallback(async (blogId) => {
    try {
      await deleteBlog(blogId);
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
    } catch (error) {
      console.error('Delete failed:', error);
    }
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
```

---

## Testing Patterns

### 1. **Component Testing Structure**

```javascript
// BlogCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCard from './BlogCard';

const mockBlog = {
  id: '1',
  title: 'Test Blog',
  excerpt: 'Test excerpt',
  createdAt: '2024-01-01'
};

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('BlogCard', () => {
  test('renders blog information correctly', () => {
    renderWithRouter(<BlogCard blog={mockBlog} />);
    
    expect(screen.getByText('Test Blog')).toBeInTheDocument();
    expect(screen.getByText('Test excerpt')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    const mockOnEdit = jest.fn();
    renderWithRouter(
      <BlogCard blog={mockBlog} onEdit={mockOnEdit} />
    );
    
    fireEvent.click(screen.getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith('1');
  });
});
```

### 2. **Custom Hook Testing**

```javascript
// useAuth.test.js
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const wrapper = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('useAuth', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(true);
  });

  test('should login successfully', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });
    
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toBeTruthy();
  });
});
```

---

## 🚀 Advanced Component Patterns

### 1. **Render Props Pattern**

```javascript
const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return children({ data, loading, error });
};

// Usage
<DataFetcher url="/api/blogs">
  {({ data, loading, error }) => {
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage error={error} />;
    return <BlogList blogs={data} />;
  }}
</DataFetcher>
```

### 2. **Compound Component Pattern**

```javascript
const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeTab, setActiveTab, index })
      )}
    </div>
  );
};

const TabList = ({ children, activeTab, setActiveTab }) => (
  <div className="tab-list">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { 
        isActive: activeTab === index,
        onClick: () => setActiveTab(index)
      })
    )}
  </div>
);

const Tab = ({ children, isActive, onClick }) => (
  <button 
    className={`tab ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabPanels = ({ children, activeTab }) => (
  <div className="tab-panels">
    {React.Children.toArray(children)[activeTab]}
  </div>
);

// Usage
<Tabs defaultTab={0}>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <div>Panel 1 Content</div>
    <div>Panel 2 Content</div>
  </TabPanels>
</Tabs>
```

### 3. **Error Boundary Pattern**

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <BlogEditor />
</ErrorBoundary>
```

---

## 📚 Key Takeaways

### Component Design Principles
1. **Single Responsibility**: Each component has one clear purpose
2. **Composition over Inheritance**: Build complex UIs by combining simple components
3. **Props Interface**: Clear, predictable props with good defaults
4. **State Management**: Keep state as local as possible, lift up when needed
5. **Performance**: Use memoization and optimization techniques appropriately

### Best Practices Implemented
- ✅ Consistent naming conventions
- ✅ Proper prop validation with TypeScript/PropTypes
- ✅ Accessibility considerations (ARIA labels, keyboard navigation)
- ✅ Responsive design patterns
- ✅ Error handling and loading states
- ✅ Clean component interfaces
- ✅ Reusable and composable components

This component architecture provides a solid foundation for scalable React applications with maintainable, testable, and performant code.