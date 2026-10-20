class RegistroPage {
    //Propiedades de la página
    //Seran los elementos que tiene disponible
    constructor(page) {
        this.page = page;
        this.inputFullName = this.page.getByRole('textbox', { name: 'Full Name' });
        this.inputEmailAddress = this.page.getByRole('textbox', { name: 'Email Address' });
        this.inputPassword = this.page.getByLabel('Password', { exact: true });
        this.inputConfirmPassword = this.page.getByLabel('Confirm Password', { exact: true });
        this.botonCreateAccount = this.page.getByRole('button', { name: 'Create Account' });
        this.formulario = this.page.locator('div.bg-white.rounded-2xl.shadow-xl.p-8');
        this.mensajeError = this.page.locator('div.bg-red-50.border.border-red-200.rounded-lg.p-4.mb-6');
    }

    //Acciones
    async llenarFullName(value) {
        await this.inputFullName.fill(value);
    }

    async llenarEmailAddress(value) {
        await this.inputEmailAddress.fill(value);
    }

    async llenarPassword(value) {
        await this.inputPassword.fill(value);
    }

    async llenarConfirmPassword(value) {
        await this.inputConfirmPassword.fill(value);
    }

    async clicarBotonCreateAccount() {
        await this.botonCreateAccount.click();
    }

    async registrar(fullName, emailAddress, password, confirmPassword) {

        //Entramos a la página
        await this.page.goto('https://ecommerce-js-test.vercel.app');
        await this.page.getByRole('link', { name: 'Register' }).click();

        this.formulario.screenshot({ path: 'screenshots/formulario.png' })
        //accedemos a los métodos
        await this.llenarFullName(fullName);
        await this.llenarEmailAddress(emailAddress);
        await this.llenarPassword(password);
        await this.llenarConfirmPassword(confirmPassword);
        await this.clicarBotonCreateAccount();
    }
}

export default RegistroPage;