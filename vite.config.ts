import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isVercel = env.VERCEL === '1' || env.VERCEL === 'true';
  const base = env.BASE_PATH || (isVercel ? '/' : '/Portfolio/');

  return {
    base,
    plugins: [react()],
  };
});
