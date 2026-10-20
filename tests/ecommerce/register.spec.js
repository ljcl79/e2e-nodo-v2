import { expect, test } from '@playwright/test';

test.describe('Intento de registro', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/');

        const linkRegister = page.getByRole('link', { name: 'Register' });

        await linkRegister.click();

    });

    test.afterEach(async ({ page }) => {
        console.log("Finalzó prueba");
    });

    test('Registro exitoso', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Full Name' }).fill("Juan");
        await page.getByRole('textbox', { name: 'Email Address' }).fill("juan@juan.com");

        await page.getByLabel('Password', { exact: true }).fill("asd123");

        await page.getByLabel('Confirm Password').fill("asd123");

        await page.getByRole('button', { name: 'Create Account' }).click();


        await expect(page.getByText('Logout', { exact: true })).toBeVisible();

    });


    test('Registro NO exitoso', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Full Name' }).fill("Juan");
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");

        await page.getByLabel('Password', { exact: true }).fill("admin123");

        await page.getByLabel('Confirm Password').fill("admin123");

        await page.getByRole('button', { name: 'Create Account' }).click();

        //Email ya existe
        await expect(page.getByText('Email already registered')).toBeVisible();
    });

});