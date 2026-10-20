import test, { expect } from "@playwright/test";
import RegistroPage from "./pages/Registro";
import * as allure from "allure-js-commons";

let registroPage;
test.describe("Pruebas de Registro e2e", () => {

    test.beforeEach(async ({ page }) => {
        registroPage = new RegistroPage(page);
    });

    test('Registro con datos válidos', async ({ page }) => {
        allure.epic('Datos válidos');

        await allure.step('1. Ejecutar acciones del formulario', async () => {
            await registroPage.registrar('Leonardo', 'ljcl79@gmail.com', '12345678', '12345678');
        });

        await allure.step('2. Ejecutar prueba', async () => {
            await expect(page.getByText('Logout', { exact: true })).toHaveText('Logout');
            const screenshot = await page.screenshot({ path: 'screenshots/registro-valido.png' });
            await allure.attachment('Registro exitoso', screenshot, 'image/png');
        });
    });

    test('Registro con password diferente', async ({ page }) => {
        allure.epic('Datos inválidos');
        await allure.step('1. Ejecutar acciones del formulario', async () => {
            await registroPage.registrar('Otro usuario', 'otro@gmail.com', '12345678', '12343434348');
        });
        await allure.step('2. Ejecutar prueba', async () => {
            await expect(registroPage.mensajeError).toHaveText('Passwords do not match');
        });
    });

    test('Registro con password inválido', async ({ page }) => {
        allure.epic('Datos inválidos');
        allure.severity('critical');
        await registroPage.registrar('Otro usuario con password invalido', 'otro@gmail.com', '123', '123');
        await expect(registroPage.mensajeError).toHaveText('Password must be at least 6 characters long');
    });
});