import test, { expect } from "@playwright/test";
import LoginPage from "./pages/Login";
let loginPage
test.describe("Pruebas de login", () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
    })
    test("Login con datos validos", async ({ page }) => {
        await loginPage.login(
            "admin@example.com",
            "admin123"
        )
        await expect(
            page.getByText('Logout', { exact: true })
        ).toBeVisible()
    })
    test("Login con datos NO validos", async ({ page }) => {
        // TODO
        await loginPage.login(
            "admin@exampwwwle.com",
            "admin123"
        )
        await expect(
            page
        ).toHaveURL(/login/);
    })
})