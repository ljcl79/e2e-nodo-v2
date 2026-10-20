import test, { expect } from "@playwright/test";

test.describe("Validación de comportamiento del backend", () => {

    test("Lista de productos vacía", async ({ page }) => {
        await page.route('**/products/**', async (route, request) => {
            route.fulfill({
                body: JSON.stringify([])
            })
        });

        //Visitar el sitio web a probar
        await page.goto('https://ecommerce-js-test.vercel.app/');

        await expect(page.getByText('Ningún producto disponible.', { exact: true })).toBeVisible();

    });

    test("Petición de cliente inválida", async ({ page }) => { // page es un objeto similar a JSON
        await page.route('**/products', async (route, request) => { //debe ser asyncrona para no bloquear. Request es lo que el cliente manda.
            route.fulfill({
                status: 404
            })
        });
        //Visitar el sitio web a probar
        await page.goto('https://ecommerce-js-test.vercel.app/');
        await expect(page.getByText('Error: Solicitud de consulta no válida'), { exact: true }).toBeVisible();
    });


});