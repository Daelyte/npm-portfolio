import { test, expect } from '@playwright/test'

// Smoke test for production content
// Run locally: npx playwright test e2e/smoke.spec.ts --headed

const BASE = process.env.PW_BASE_URL || 'http://localhost:3000'

test.describe('Portfolio smoke', () => {
  test('home loads and has hero', async ({ page }) => {
    await page.goto(BASE + '/')
    await expect(page).toHaveTitle(/James|Portfolio|JMFG/i)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('Night Whispers blog post is accessible', async ({ page }) => {
    await page.goto(BASE + '/blog/storytelling-psychology-night-whispers-series')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('article')).toBeVisible()
  })
})