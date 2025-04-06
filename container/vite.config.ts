import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container-app',
      remotes: {
        app1: 'http://localhost:5171/assets/remoteEntry.js',
        app2: 'http://localhost:5172/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
  ],
  server: {
    port: 5170,
    hmr: {
      overlay: false,
    },
    cors: true,
  },
  preview: {
    port: 5170,
    cors: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
      }
    }
  }
})
