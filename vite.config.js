// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/index.jsx', // Adjust the path as needed
    },
  },
};