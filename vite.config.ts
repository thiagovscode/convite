import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Altere `convite` para o nome do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/convite/',
})
