import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
// Lazy-loaded pages and modules
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectDetails = React.lazy(() => import("./pages/ProjectDetails"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Blog = React.lazy(() => import("./pages/blog/Blog"));
const BlogPost = React.lazy(() => import("./pages/blog/BlogPost"));
const AdminBlog = React.lazy(() => import("./pages/admin/AdminBlog"));
const Login = React.lazy(() => import("./pages/Login"));
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
// CMS Components
const AdminDashboard = React.lazy(() => import("./pages/admin/AdminDashboard"));
const BlogManager = React.lazy(() => import("./pages/admin/BlogManager"));
const BlogEditor = React.lazy(() => import("./pages/admin/BlogEditor"));
const KnowledgeManager = React.lazy(
  () => import("./pages/knowledge/KnowledgeManager"),
);
const KnowledgeEditor = React.lazy(
  () => import("./pages/knowledge/KnowledgeEditor"),
);
const MediaManager = React.lazy(() => import("./pages/admin/MediaManager"));
const AdminLayout = React.lazy(() => import("./pages/admin/AdminLayout"));
// import CustomCursor from "./components/CustomCursor";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        {!isAdminRoute && <Navbar />}
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="container mx-auto px-4 py-16 flex justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/id/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="blog" element={<AdminBlog />} />
                <Route path="blog-manager" element={<BlogManager />} />
                <Route path="blog/new" element={<BlogEditor />} />
                <Route path="blog/edit/:id" element={<BlogEditor />} />
                <Route path="blog-editor" element={<BlogEditor />} />
                <Route path="blog-editor/:id" element={<BlogEditor />} />
                <Route
                  path="knowledge-manager"
                  element={<KnowledgeManager />}
                />
                <Route path="knowledge-editor" element={<KnowledgeEditor />} />
                <Route
                  path="knowledge-editor/:id"
                  element={<KnowledgeEditor />}
                />
                <Route path="media-manager" element={<MediaManager />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;
