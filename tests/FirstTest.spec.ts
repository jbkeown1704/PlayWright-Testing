

// This is the first part of building a test suite using Playwright with TS
// This is importing like you would a class or a module in coding
import { test, expect} from '@playwright/test';

test('description of what the purpose of this test is i.e. login', async ({ page }) => {

// Step 1. Go to the URL of the application you want to test
// The await function is used make sure the page has loaded before the next step runs, otherwise the test will fail because the next step will not be able to find the elements it needs to interact with
await page.goto('https://www.saucedemo.com/');

});