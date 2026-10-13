import test, { expect } from "@playwright/test";

test.describe("Validación de comportamiento del backend", () => {

    test("Lista de productos vacía", async ({ page }) => {
        await page.route('**/products', async (route, request) => {
            route.fulfill({
                body: JSON.stringify([])
            })
        });

        //Visitar el sitio web a probar
        await page.goto('https://ecommerce-js-test.vercel.app/');

        await expect(page.getByText('Ningún producto disponible.', { exact: true })).toBeVisible();

    });

});