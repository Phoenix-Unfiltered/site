
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGithubPages ? '/site/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist'
  }
})
