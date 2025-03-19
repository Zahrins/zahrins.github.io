import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/zahrins.github.io/',
  plugins: [
    tailwindcss(),
  ],
})

