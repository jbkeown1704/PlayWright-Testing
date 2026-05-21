
import { test } from '@playwright/test';
import { LoginPage, loginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    test('successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertLoginSuccess();
    });

    test('failed login shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrong_user', 'wrong_password');
        await loginPage.assertLoginError();
    });

    
})