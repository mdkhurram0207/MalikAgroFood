import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow access from external devices
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "3e12fcea1411.ngrok-free.app" // 👈 your ngrok domain here
    ]
  }
})
