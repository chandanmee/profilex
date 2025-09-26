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
      '@assets': path.resolve(__dirname, 'src/assets'), 
    },
  },
});