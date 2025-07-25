import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // FastAPI 的默认端口号
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // 匹配任何以 "/api" 开头的字符串
      }
    }
  }
})
