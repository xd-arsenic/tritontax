import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain base path
  server: {
    host: true, // Allow access from network
    port: 5173, // Default Vite port
  },
})
