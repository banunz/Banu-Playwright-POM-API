
exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
    }

    async goToUrl() {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm")
    }

    async userNamePassword(usernameinput, passwordinput) {
        await this.page.locator('input[name="username"]').fill(usernameinput);
        await this.page.locator('input[name="password"]').fill(passwordinput);
    }

    async submitButton() {
        await this.page.locator('input[type="submit"]').click();
    }

};