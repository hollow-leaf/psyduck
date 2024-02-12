import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

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
  ]
})
