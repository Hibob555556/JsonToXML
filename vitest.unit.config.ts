import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['test/unit/*.{test,spec}.ts'],
    environment: 'jsdom'
  }
})
