import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    vue()
  ],
  root: "./site/public/",
  server: {
    host: "0.0.0.0"
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  },
})
