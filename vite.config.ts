import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  root: "./site",
  server: {
    host: "0.0.0.0"
  }
})
