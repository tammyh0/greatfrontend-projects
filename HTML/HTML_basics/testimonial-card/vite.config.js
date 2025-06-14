// vite.config.js
// Basic config for Vanilla JS
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
