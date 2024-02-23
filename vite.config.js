import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteTestPlugin } from 'vitest/config';

export default defineConfig({
  plugins: [react(), viteTestPlugin()],
  test: {
    // Place any global test options here
    globals: true,
    environment: 'jsdom',
  },
});