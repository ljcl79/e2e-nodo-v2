import test, { expect } from "@playwright/test";

test.describe("Envío de registro desde iframe", () => {

    test("Validando eel envío de email", async ({ page }) => {
        const emailPrueba = "leo@leo.com";

        await page.goto("https://e2e-ecommerce-app.vercel.app/iframe");

        const iframeEmail = page.frameLocator('#practice-iframe');

        await iframeEmail.getByLabel('Email').fill(emailPrueba);
        await iframeEmail.getByRole('button', { name: 'Enviar' }).click();

        await expect(iframeEmail.getByText('Email recibido: ' + emailPrueba, { exact: true })).toBeVisible();

    })
})