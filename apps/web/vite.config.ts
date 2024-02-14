import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import {resolve} from 'node:path'

dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  define: {
    'process.env': process.env
  },
  plugins: [
    react({include: '**/*.tsx'}),
  ],
  resolve: {
    alias: [{ find: "src", replacement: resolve(__dirname, "./src") }]
  }
})
