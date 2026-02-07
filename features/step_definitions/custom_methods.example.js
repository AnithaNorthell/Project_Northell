/**
 * Example Step Definitions using CustomMethods
 * This file demonstrates how to use custom helper methods in step definitions
 */

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const CustomMethods = require('../support/CustomMethods');

let customMethods;

// Initialize custom methods before each scenario
Given('Initialize custom methods', function () {
    customMethods = new CustomMethods(this.page);
});

// Example: Fill form with multiple fields
When('User fills the form with the following details:', async function (dataTable) {
    const formData = {};
    dataTable.hashes().forEach(row => {
        formData[row.field] = row.value;
    });
    await customMethods.fillForm(formData);
});

// Example: Submit form
When('User submits the form', async function () {
    await customMethods.submitForm('button[type="submit"]');
});

// Example: Verify table data
Then('User should see table with following data:', async function (dataTable) {
    const expectedData = dataTable.hashes();
    const actualTableData = await customMethods.getTableData('table');

    expect(actualTableData.length).to.be.greaterThan(0);
});

// Example: Upload file
When('User uploads file from {string}', async function (filePath) {
    await customMethods.uploadFile('input[type="file"]', filePath);
});

// Example: Wait for API response
When('User waits for API response from {string}', async function (urlPattern) {
    const response = await customMethods.waitForAPIResponse(urlPattern);
    expect(response.ok()).to.be.true;
});

// Example: Verify element text
Then('Element {string} should contain text {string}', async function (selector, expectedText) {
    await customMethods.verifyElementText(selector, expectedText);
});

// Example: Handle dialogs
When('User confirms the dialog', async function () {
    await customMethods.handleDialog(true);
});

// Example: Execute JavaScript
Then('JavaScript should return {string}', async function (expectedValue) {
    const result = await customMethods.executeJavaScript('return document.title;');
    expect(result).to.include(expectedValue);
});
