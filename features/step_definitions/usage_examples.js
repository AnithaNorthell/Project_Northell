/**
 * Usage Examples - How to Use Page Objects and Custom Methods
 * This file shows practical examples of writing test steps
 */

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../support/pages/LoginPage');
const CustomMethods = require('../support/CustomMethods');
const BasePage = require('../support/pages/BasePage');

// Example 1: Using LoginPage (Page Object)
// ==========================================

let loginPage;

Given('I am on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigateToLogin('https://example.com/login');
});

When('I enter valid credentials', async function () {
    await loginPage.login('testuser@example.com', 'Password123!');
});

Then('I should be logged in successfully', async function () {
    // Use page title to verify login
    const title = await loginPage.getPageTitle();
    expect(title).to.include('Dashboard');
});

// Example 2: Using CustomMethods (Helper Methods)
// ================================================

let customMethods;

Given('I have initialized helper methods', function () {
    customMethods = new CustomMethods(this.page);
});

When('I fill the registration form with:', async function (dataTable) {
    const formData = {};
    dataTable.hashes().forEach(row => {
        formData[row.field] = row.value;
    });
    // Example: #firstName, #lastName, #email, #password
    await customMethods.fillForm(formData);
});

Then('The registration button is enabled', async function () {
    const isEnabled = await customMethods.page.isEnabled('#registerBtn');
    expect(isEnabled).to.be.true;
});

// Example 3: Using BasePage Methods Directly
// ============================================

let basePage;

// Note: "I navigate to {string}" is defined in example.steps.js
// Uncomment below if you want to use it from this file instead

// Given('I navigate to {string}', async function (url) {
//     basePage = new BasePage(this.page);
//     await basePage.navigateTo(url);
// });

When('I click on {string}', async function (selector) {
    basePage = basePage || new BasePage(this.page);
    await basePage.click(selector);
});

When('I fill {string} with {string}', async function (selector, value) {
    basePage = basePage || new BasePage(this.page);
    await basePage.fillText(selector, value);
});

Then('Element {string} should be visible', async function (selector) {
    const isVisible = await basePage.isVisible(selector);
    expect(isVisible).to.be.true;
});

Then('Element {string} should contain {string}', async function (selector, expectedText) {
    const text = await basePage.getText(selector);
    expect(text).to.include(expectedText);
});

// Example 4: Advanced Scenarios
// ==============================

When('I hover over {string}', async function (selector) {
    await basePage.hoverOver(selector);
});

When('I double click on {string}', async function (selector) {
    await basePage.doubleClick(selector);
});

When('I select {string} from dropdown {string}', async function (value, selector) {
    await basePage.selectDropdown(selector, value);
});

When('I press {string} key on {string}', async function (key, selector) {
    await basePage.pressKey(selector, key);
});

Then('The current URL should contain {string}', async function (expectedURL) {
    const url = await basePage.getCurrentURL();
    expect(url).to.include(expectedURL);
});

// Example 5: Screenshot and Debugging
// ====================================

Then('I take a screenshot named {string}', async function (fileName) {
    await basePage.takeScreenshot(fileName);
});

When('I scroll to element {string}', async function (selector) {
    await customMethods.scrollToElement(selector);
});

// Example 6: Table Operations
// ============================

Then('I should see {int} rows in the table {string}', async function (expectedRows, tableSelector) {
    const tableData = await customMethods.getTableData(tableSelector);
    expect(tableData).to.have.lengthOf(expectedRows);
});

// Example 7: Cookie and Storage
// ==============================

When('I add cookie {string} with value {string}', async function (cookieName, cookieValue) {
    await customMethods.addCookie(cookieName, cookieValue);
});

Then('Cookie {string} should exist', async function (cookieName) {
    const cookies = await customMethods.getAllCookies();
    const cookieExists = cookies.some(c => c.name === cookieName);
    expect(cookieExists).to.be.true;
});

// Example 8: File Upload
// ======================

When('I upload file {string}', async function (filePath) {
    await customMethods.uploadFile('input[type="file"]', filePath);
});

// Example 9: Wait Operations
// ===========================

When('I wait {int} milliseconds', async function (ms) {
    await basePage.wait(ms);
});

When('I wait for element {string} to appear', async function (selector) {
    await basePage.waitForElement(selector);
});

When('I wait for element {string} to disappear', async function (selector) {
    await customMethods.waitForElementToDisappear(selector);
});

// Example 10: Attribute Checking
// ==============================

Then('Element {string} should have attribute {string} with value {string}',
    async function (selector, attrName, attrValue) {
        const value = await basePage.getAttribute(selector, attrName);
        expect(value).to.equal(attrValue);
    }
);

Then('Element {string} should be enabled', async function (selector) {
    const enabled = await basePage.isEnabled(selector);
    expect(enabled).to.be.true;
});

Then('Element {string} should be disabled', async function (selector) {
    const enabled = await basePage.isEnabled(selector);
    expect(enabled).to.be.false;
});
