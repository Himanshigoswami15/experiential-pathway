import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const databaseUrl = env.DATABASE_URL || env.VITE_DATABASE_URL || '';

  return {
    plugins: [react()],
    define: {
      'process.env.DATABASE_URL': JSON.stringify(databaseUrl),
      'import.meta.env.VITE_DATABASE_URL': JSON.stringify(databaseUrl)
    },
    server: {
      port: 5173,
      open: false
    }
  };
});

