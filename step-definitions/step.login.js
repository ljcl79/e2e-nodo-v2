const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');

Given('que el usuario está en la pantalla de Login', async function () {
    await this.loginPage.accessLoginPage();
});

When('el usuario ingresa el correo {string}', async function (username) {
    await this.loginPage.fillEmail(username);
});

When('el usuario ingresa la clave {string}', async function (password) {
    await this.loginPage.fillPassword(password);
});

When('el usuario hace clic en el botón "Sign In"', async function () {
    await this.loginPage.clickSignIn();
});

Then('debería verse el botón "Logout"', async function () {
    await expect(this.page.getByText('Logout', { exact: true }))
        .toBeVisible()
});

Then('debería verse el mensaje de error {string}', async function (mensaje) {
    await expect(this.page.getByText(mensaje, { exact: true }))
        .toBeVisible();
});

Then('no debería estar habilitado el boton {string}', async function (textoBoton) {
    await expect(this.page.getByText(textoBoton, { exact: true }))
        .not.toBeEnabled();
});
