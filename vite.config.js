import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [handlebars()],
});
