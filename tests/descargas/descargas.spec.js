import test, { expect } from "@playwright/test";

test.describe("Set de pruebas de descargas", () => {
    test("Validando nombre de archivo", async ({ page }) => {

        await page.goto("https://e2e-ecommerce-app.vercel.app/products/1");

        const responsableDownload = page.waitForEvent('download');

        await page.getByRole('link', { name: 'Descargar ficha PDF' }).click();

        const descarga = await responsableDownload;

        expect(descarga.suggestedFilename()).toBe('fichaProducto.pdf');

    });
});
