
import { test, expect} from '@playwright/test';


//This is ran before each of the below methods to set up the testing enviroment
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});


// This is allows for the tests to be listed under
test.describe('Login Tests', () => {

// This is a method to pass the login screentests/Actions.spec.ts
test('successful login', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(page.getByText('Products')).toBeVisible();

});


// This is a method to intentionally fail the login
test('failed login shows error', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('wrong_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login'}).click();

    await expect(page.getByText('Username and password do not match')).toBeVisible()

    await expect(page).toHaveURL('https://www.saucedemo.com/')
});

});