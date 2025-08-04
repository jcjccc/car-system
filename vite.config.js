import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 5173,       // 自定义端口（可改）
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 添加这行
    }
  }
})
