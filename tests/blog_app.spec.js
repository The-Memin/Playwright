const { test, expect, beforeEach, describe } = require('@playwright/test')

describe('Blog app', () => {
    beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173')
    })

    test('Login form is shown', async ({ page }) => {
        await expect(page.getByText('Log in to application')).toBeVisible()
        await page.getByRole('button', { name: 'login' }).click()
        await expect(page.getByPlaceholder('username')).toBeVisible()
        await expect(page.getByPlaceholder('password')).toBeVisible()
    })
})