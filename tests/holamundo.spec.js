import test from "@playwright/test";

test("Validación del login con datos correctos", async ({ page }) => {
    await page.goto("https://crm-matosso.leonardojose.dev/login");

    await page.locator('#email22').fill('leo@leo.com');
});