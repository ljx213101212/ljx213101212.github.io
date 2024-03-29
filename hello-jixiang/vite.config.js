import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      assets: resolve(__dirname, 'src/assets'),
      views: resolve(__dirname, 'src/views'),
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      global: resolve(__dirname, 'src/global'),
      utils: resolve(__dirname, 'src/utils'),
      Provider: resolve(__dirname, 'src/Provider'),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
});
