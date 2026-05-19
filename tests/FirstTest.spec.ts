

// This is the first part of building a test suite using Playwright with TS
// This is importing like you would a class or a module in coding
import { test, expect} from '@playwright/test';

test('description of what the purpose of this test is i.e. login', async ({ page }) => {

// Step 1. Go to the URL of the application you want to test
// The await function is used make sure the page has loaded before the next step runs, otherwise the test will fail because the next step will not be able to find the elements it needs to interact with
await page.goto('https://www.saucedemo.com/');


// Step 2. This is the interaction step for the buttons on the page simulating a login

// This line will first find the input field with the placeholder text 'Username' and will use the username for the website which is 'standard_user' and fill it in the input field
await page.getByPlaceholder('Username').fill('standard_user')

// This line will first find the input field with the place holder text 'Password' and will use the password for the website which is 'secret_sauce'
await page.getByPlaceholder('Password').fill('secret_sauce')

// Finally, this line will find the button with the role of 'button' and the name 'Login' and will click it to log in to the website
await page.getByRole('button', { name: 'Login' }).click();

// Step 3. Then we will check to see if the login has taken us to the correct page 
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


});