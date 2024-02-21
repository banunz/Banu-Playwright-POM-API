
const { test } = require('@playwright/test');
const { HomePage } = require('./homepage');



test('First test', async ({ page }) => {

       const login = new HomePage(page);
       await login.goToUrl();
       await login.userNamePassword('parabanktest', 'test@123');
       await login.submitButton;
})

