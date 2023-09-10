/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      all: true,
      exclude: ['src/main.tsx', '.eslintrc.cjs', 'src/vite-env.d.ts'],
      provider: 'v8',
    },
  },
});
