import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/devtools', '@nuxt/eslint'],
  sourcemap: false,
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 900
    }
  },
  devtools: { enabled: true }
})
