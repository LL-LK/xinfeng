import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    modulePreload: {
      polyfill: false
    },
    cssTarget: 'chrome61',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.indexOf('node_modules') > -1) {
            if (id.indexOf('react') > -1 || id.indexOf('react-dom') > -1) {
              return 'react-vendor';
            }
            if (id.indexOf('framer-motion') > -1) {
              return 'framer-motion';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false
  }
})
