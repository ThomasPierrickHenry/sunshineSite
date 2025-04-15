import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: './node_modules/.vite/app',
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': process.env,
  },
  publicDir: 'public',
  build: {
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
