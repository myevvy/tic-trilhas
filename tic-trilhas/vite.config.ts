// Define como o seu projeto é empacotado e otimizado para rodar no navegador. Se você usa o Vite, por exemplo, ele configura o servidor local super rápido que você usa para testar o app.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react()],
})



