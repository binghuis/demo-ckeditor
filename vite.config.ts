import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // 依赖预构建，将 commonjs 模块转成 es module
    include: ['@songbinghui/ckeditor5'],
  }
})
