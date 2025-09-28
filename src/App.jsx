import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog/BlogPost';
import AdminBlog from './pages/admin/AdminBlog';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
// CMS Components
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogManager from './pages/admin/BlogManager';
import BlogEditor from './pages/admin/BlogEditor';
import KnowledgeManager from './pages/knowledge/KnowledgeManager';
import KnowledgeEditor from './pages/knowledge/KnowledgeEditor';
import MediaManager from './pages/admin/MediaManager';
// import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/id/:id" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <AdminBlog />
              </ProtectedRoute>
            } />
            {/* CMS Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog-manager" element={
              <ProtectedRoute>
                <BlogManager />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog/new" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog/edit/:id" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog-editor" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog-editor/:id" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/knowledge-manager" element={
              <ProtectedRoute>
                <KnowledgeManager />
              </ProtectedRoute>
            } />
            <Route path="/admin/knowledge-editor" element={
              <ProtectedRoute>
                <KnowledgeEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/knowledge-editor/:id" element={
              <ProtectedRoute>
                <KnowledgeEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/media-manager" element={
              <ProtectedRoute>
                <MediaManager />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;