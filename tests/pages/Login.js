class LoginPage {
    constructor(page) {
        this.page = page;
        // Atributos
        this.inputEmail = this.page.getByRole('textbox', { name: 'Email Address' });
        this.inputPassword = this.page.getByLabel('Password');
        this.buttonSignIn = this.page.getByRole('button', { name: 'Sign In' });
        this.errorMessage = this.page.locator('div.bg-red-50.border.border-red-200.rounded-lg.p-4.mb-6');
    }
    // Acciones
    async fillEmail(value) {
        await this.inputEmail.fill(value);
    }
    async fillPassword(value) {
        await this.inputPassword.fill(value)
    }
    async clickSignIn() {
        await this.buttonSignIn.click()
    }
    async login(email, password) {
        await this.page.goto('https://ecommerce-js-test.vercel.app/')
        await this.page.getByRole('link', { name: 'Login' }).click();

        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.clickSignIn()
    }
}
export default LoginPage;