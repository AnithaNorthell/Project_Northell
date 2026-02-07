const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../support/pages/LoginPage');

let loginPage;


Given('User navigates to login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigateToLogin('https://responseos-portal-test.azurewebsites.net/');
});

When('User enters username {string}', async function (username) {
    await loginPage.enterUsername(username);
    await loginPage.clickNextButton();
});

When('User enters password {string}', async function (password) {
    await loginPage.enterPassword(password);
    await loginPage.clickNextButton();
 

});
When('User clicks login button', async function () {
    await loginPage.clickLoginButton();
    this.page.waitForLoadState('networkidle');
 
 
  
});

Then('User validate current URL is {string}', async function (expectedUrl) {
    await loginPage.wait(30000);
    const currentUrl = await loginPage.getCurrentURL();
    console.log(`Current URL: ${currentUrl}`);
    expect(currentUrl).to.equal(expectedUrl);
});

