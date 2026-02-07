const BasePage = require('./BasePage');

/**
 * LoginPage - Page object for login functionality
 * Example page object implementation
 */
class LoginPage extends BasePage {

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
    async clickYesButton() {
        await this.click(this.yesButton);
    }

    async isLoginButtonEnabled() {
        return await this.isEnabled(this.loginButton);
    }

  

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        console.log('✓ Login action completed');
    }
}

module.exports = LoginPage;
