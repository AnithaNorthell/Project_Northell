const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');

/**
 * LoginPage - Page object for login functionality
 * Example page object implementation
 */
class HomePage extends LoginPage {
    // Selectors
    get usernameInput() {
        return '#i0116';
    }

    get passwordInput() {
        return '#i0118';
    }

    get loginButton() {
        return '#idSIButton9';
    }
    get nextButton() {
        return '#idSIButton9';
    }
    get yesButton() {
        return '#idSIButton9';
    }

    get errorMessage() {
        return '.error-message';
    }
    get firstName() {
        return "//input[@ng-model='FirstName']";
    }
    get lastName() {
        return "//input[@ng-model='LastName']";
    }

    // Methods
    async navigateToLogin(url) {
        await this.navigateTo(url);
    }

    async enterUsername(username) {
        await this.fillText(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.fillText(this.passwordInput, password);
    }

    async clickNextButton() {
        await this.click(this.nextButton);
    }
    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async isLoginButtonEnabled() {
        return await this.isEnabled(this.loginButton);
    }

    async getErrorMessage() {
        if (await this.isVisible(this.errorMessage)) {
            return await this.getText(this.errorMessage);
        }
        return null;
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        console.log('✓ Login action completed');
    }
}

module.exports = HomePage;
