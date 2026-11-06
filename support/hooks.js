const { After, Before } = require("@cucumber/cucumber");
const LoginPage = require("../tests/pages/Login");


Before(async function () {
    await this.init();
    this.loginPage = new LoginPage(this.page);
    console.log('Before')
});


After(async function (scenario) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');

});