import test, { expect } from "@playwright/test";

test.describe("Pruebas de Login", () => {
    test.beforeEach(async ({ page }) => {
        //Ir al site
        await page.goto("/");
        //Seleccionar el elemento
        const linkLogin = page.getByRole('link', { name: 'Login' });
        //Ejecutar una acción
        await linkLogin.click();
    });

    test("Validación con datos correctos", async ({ page }) => {
        //Selecciono la cajita de email
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");
        await page.getByPlaceholder('Enter your password').fill("admin123");

        await page.getByRole('button', { name: 'Sign In' }).click();
        //Validar lo obtenido con lo esperado
        await expect(page.getByText('Logout', { exact: true })).toBeVisible();
    });

    test("Validación con datos inválidos", async ({ page }) => {
        //Selecciono la cajita de email
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin11@example.com");
        await page.getByPlaceholder('Enter your password').fill("admin123");

        await page.getByRole('button', { name: 'Sign In' }).click();
        //Validar lo obtenido con lo esperado
        await expect(page.getByText('Invalid email or password', { exact: true })).toBeVisible();
    });

});