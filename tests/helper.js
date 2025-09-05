import { expect } from '@playwright/test'

const TEST_USER = {
    name: 'TestUser',
    username: 'test-user',
    password: 'password123**'
}

const showLoginForm = async (page) => {
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByPlaceholder('username')).toBeVisible()
    await expect(page.getByPlaceholder('password')).toBeVisible()
}

const loginWith = async (page, { username, password }) => {
    await showLoginForm(page)
    await page.getByPlaceholder('username').fill(username)
    await page.getByPlaceholder('password').fill(password)
    await page.getByRole('button', { name: 'login' }).click()
}

export {
    TEST_USER,
    showLoginForm,
    loginWith
}