import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    strictPort: true,
  },
  root: resolve(__dirname, 'src'),
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/pages')
    }
  )],
})
