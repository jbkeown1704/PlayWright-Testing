
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('find elements by placeholder', async ({page}) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    });

test('find element by text', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.getByText('Products')).toBeVisible();

});