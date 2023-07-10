import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/pages'),
    context: {
      user: 'ffff bbbbb'
    }
  }
  )],
})