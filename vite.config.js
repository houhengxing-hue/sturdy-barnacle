import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sturdy-barnacle/',  // 若仓库名为 test；若为 username.github.io 则改为 '/'
})
