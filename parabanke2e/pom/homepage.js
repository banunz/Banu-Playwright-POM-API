 class HomePage {
    constructor(page) {
        this.page = page
       this.username =page.locator('input[name="username"]')
       this.password=page.locator('input[name="password"]')
      this.submit =page.locator('input[type="submit"]')

    }

    async goToUrl() {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
    }

    async userNamePassword(usernameinput, passwordinput) {
        await this.username.fill(usernameinput);
        await this.password.fill(passwordinput);
    }

    async submitButton() {
        await this.page.submit.click();
    }

};
module.exports = {HomePage};