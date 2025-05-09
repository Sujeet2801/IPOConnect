import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1/users": "https://ipoconnect-production.up.railway.app/"
      // "/api/v1/users": "https://8000/"
    }
  },
  plugins: [
    react(), 
    tailwindcss()
  ],
})
