const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const BasePage = require('../support/pages/BasePage');

let basePage;

Given('I navigate to {string}', async function (url) {
    basePage = new BasePage(this.page);
    await basePage.navigateTo(url);
});

Then('The page title should contain {string}', async function (expectedTitle) {
    const title = await basePage.getPageTitle();
    expect(title).to.include(expectedTitle);
    console.log(`✓ Page title verified: "${title}"`);
});
