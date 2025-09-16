import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // troque pelo NOME exato do seu repositório
  base: '/convite/',  
})