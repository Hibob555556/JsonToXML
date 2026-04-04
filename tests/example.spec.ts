import { expect, test } from '@nuxt/test-utils/playwright'

test('example e2e test', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Turn messy TypeScript into polished documentation in minutes.')
  await expect(page.getByRole('link', { name: 'Generate My Docs' })).toHaveAttribute('href', '/submit')
})
