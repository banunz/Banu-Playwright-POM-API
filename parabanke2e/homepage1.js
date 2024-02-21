// @ts-check
const {test}=require('@playwright/test')

test('First test',async ({page})=>{
       await page.goto("https://parabank.parasoft.com/parabank/index.htm");
       await page.locator('input[name="username"]').fill('parabanktest');
       await page.locator('input[name="password"]').fill('test@123');
       await page.locator('input[type="submit"]').click();

})

// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });