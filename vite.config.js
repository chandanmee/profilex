import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 👈 Import path module for resolving directories

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Makes it accessible on your local network
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'), 
    },
  },
  // Production build optimizations
  build: {
    minify: 'esbuild', // Ensure esbuild minification is enabled
    sourcemap: false, // Disable source maps in production to reduce bundle size
    rollupOptions: {
      output: {
        // Manual chunking for better caching and reduced initial bundle
        manualChunks: {
          // Vendor chunks for heavy libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['react-icons/fa', 'react-icons/fi', 'react-icons/bs', 'react-icons/ai'],
          'vendor-markdown': ['react-markdown', 'remark-gfm'],
          'vendor-animation': ['framer-motion'],
          'vendor-ogl': ['ogl'],
          // Admin-only chunks (loaded only on admin routes)
          'admin-bundle': [
            './src/pages/admin/AdminDashboard.jsx',
            './src/pages/admin/BlogManager.jsx',
            './src/pages/admin/BlogEditor.jsx',
            './src/pages/admin/MediaManager.jsx'
          ]
        },
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace('.jsx', '') : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000, // Warn for chunks larger than 1MB
  },
  // ESBuild optimizations for production
  esbuild: {
    // Remove console.log and debugger statements in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Minify identifiers for smaller bundle
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});