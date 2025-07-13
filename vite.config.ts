import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080, // 👈 Required for Railway healthcheck
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: 'dist',
  },
  base: './', // 👈 Important for correct relative routing
});