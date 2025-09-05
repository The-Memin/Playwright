const { test, expect, beforeEach, describe } = require('@playwright/test')
const {showLoginForm, loginWith, TEST_USER } = require('./helper')

describe('Blog app', () => {
    beforeEach(async ({ page, request }) => {
        await request.post('/api/testing/reset')
        await request.post('/api/users', {
            data: { username: TEST_USER.username, name: TEST_USER.name, password: TEST_USER.password },
        })
        await page.goto('/')
    })

    test('Login form is shown', async ({ page }) => {
        await expect(page.getByText('Log in to application')).toBeVisible()
        await showLoginForm(page)
    })

    describe('Login', () => {
        test('succeeds with correct credentials', async ({ page }) => {
            loginWith(page, { username: TEST_USER.username, password: TEST_USER.password })
            await expect(page.getByText(`${TEST_USER.name} logged in`)).toBeVisible()
        } )
        test('fails with wrong credentials', async ({ page }) => {
            loginWith(page, { username: TEST_USER.username, password: 'wrong' })
            await expect(page.getByText('Wrong username or password')).toBeVisible()
            await expect(page.getByText(`${TEST_USER.name} logged in`)).not.toBeVisible()
            const errorDiv = page.locator('.error')
            await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)')
            await expect(errorDiv).toHaveCSS('border-style', 'solid')
        })
    })
})