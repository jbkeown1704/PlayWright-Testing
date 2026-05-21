

/// This just imports the Playwright function
import { Page, expect } from '@playwright/test'


// This is the class for the LoginPage allowing it to be exported
export class LoginPage {
    
    //constuctor, so you can pass in the page needed for the login information
    constructor(private page: Page) {}

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }


    //This is passing the username and password value for the user to enter for mutiple 
    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }


    //This can then manage both the follow the pass and fail states
    async assertLoginSuccess() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async assertLoginError() {
        await expect(this.page.getByText('Username and password do not match')).toBeVisible();
    }

    

}