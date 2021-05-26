import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'src/lib'),
      store: path.resolve(__dirname, 'src/store'),
      router: path.resolve(__dirname, 'src/router'),
    }
  }
})
