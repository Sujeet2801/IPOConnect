import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
  proxy: {
    "/api/v1/users": {
      target: "https://ipoconnect-production.up.railway.app",
      changeOrigin: true,
      secure: false,
    }
  }

  },
  plugins: [
    react(), 
    tailwindcss()
  ],
})