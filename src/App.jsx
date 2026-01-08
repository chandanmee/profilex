import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
// Lazy-loaded pages and modules
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/blog/Blog'));
const BlogPost = React.lazy(() => import('./pages/blog/BlogPost'));
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog'));
const Login = React.lazy(() => import('./pages/Login'));
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
// CMS Components
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const BlogManager = React.lazy(() => import('./pages/admin/BlogManager'));
const BlogEditor = React.lazy(() => import('./pages/admin/BlogEditor'));
const KnowledgeManager = React.lazy(() => import('./pages/knowledge/KnowledgeManager'));
const KnowledgeEditor = React.lazy(() => import('./pages/knowledge/KnowledgeEditor'));
const MediaManager = React.lazy(() => import('./pages/admin/MediaManager'));
// import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="container mx-auto px-4 py-16 flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;