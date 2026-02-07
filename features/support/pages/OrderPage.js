const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
/**
 * LoginPage - Page object for login functionality
 * Example page object implementation
 */
class OrderPage extends HomePage {

 
    // Selectors
    get ResponseOS() {
        return "//h1[normalize-space(text())='ResponseOS']";
    }
    get NewRFP() {
        return "//button[normalize-space(text())='New RFP']";
    }   
    get UploadRFP() {
        return "//span[normalize-space(text())='Upload RFP']";
    }
    get NIcon() {
        return "//img[@alt='Northell']";
    }       
    get BookIcon() {
        return "//div[@class='nav-menu_header']//button[1]";
    }   
    get Feedback() {
        return "//button[text()='Feedback']";
    }       
    get Profile() {
        return "//div[@class='nav-menu_user-avatar']";
    }

    get leftNavBar() {
        return "//div[@class='nav-menu ']";
    }
    get firstFileInLeftNavBar() {
        return "(//a[@class='nav-menu_files-link'])[1]";
    }
    get threeDots() {
        return "(//span[contains(@class,'e-btn-icon e-icons')])[1]";
    }

get renameBtn() {
    return "//li[normalize-space(text())='Rename']";
}
  get deleteBtn() {
    return "//li[normalize-space(text())='Delete']";
}
    get bottomLeftArea() {
        return "//p[contains(.,'Copyright 2004 - 2026 Northell Partners Ltd. All Rights Reserved. v1.1.0')]";
    } 

    // Methods



















    // async navigateToLogin(url) {
    //     await this.navigateTo(url);
    // }

    // async enterUsername(username) {
    //     await this.fillText(this.usernameInput, username);
    // }

    // async enterPassword(password) {
    //     await this.fillText(this.passwordInput, password);
    // }

    // async clickNextButton() {
    //     await this.click(this.nextButton);
    // }
    // async clickLoginButton() {
    //     await this.click(this.loginButton);
    // }

    // async isLoginButtonEnabled() {
    //     return await this.isEnabled(this.loginButton);
    // }

    // async getErrorMessage() {
    //     if (await this.isVisible(this.errorMessage)) {
    //         return await this.getText(this.errorMessage);
    //     }
    //     return null;
    // }

    // async login(username, password) {
    //     await this.enterUsername(username);
    //     await this.enterPassword(password);
    //     await this.clickLoginButton();
    //     console.log('✓ Login action completed');
    // }
}

module.exports = OrderPage;
