import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/appfolio/",
  plugins: [react()],
  server: {
    port: 3016,
    host: true,
    allowedHosts: true
  }
})
