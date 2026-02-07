const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser, page;

// Custom validation methods
const customValidations = {
    // Validate RGB color
    validateRGBColor: (rgbString) => {
        const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
        return rgbRegex.test(rgbString);
    },

    // Get RGB color from element
    getRGBColor: async (element) => {
        return await element.evaluate(el => window.getComputedStyle(el).color);
    },

    // Check if element is visible
    isVisible: async (element) => {
        return await element.isVisible();
    },

    // Check if element is disabled
    isDisabled: async (element) => {
        return await element.isDisabled();
    },

    // Check if element contains text
    containsText: async (element, text) => {
        const content = await element.textContent();
        return content.includes(text);
    },

    // Check if values are equal
    toEqual: (actual, expected) => {
        return actual === expected;
    },

    // Check if element has specific attribute
    hasAttribute: async (element, attrName, attrValue) => {
        const value = await element.getAttribute(attrName);
        return value === attrValue;
    }
};

// Step Definitions
// Given('I navigate to {string}', async (url) => {
//     browser = await chromium.launch();
//     page = await browser.newPage();
//     await page.goto(url);
// });

// Then('The page title should contain {string}', async (title) => {
//     const pageTitle = await page.title();
//     expect(pageTitle).toContain(title);
// });

// // RGB Color Validation
// Then('Element {string} should have RGB color {string}', async (selector, expectedRGB) => {
//     const element = await page.$(selector);
//     const actualRGB = await customValidations.getRGBColor(element);
//     expect(actualRGB).toBe(expectedRGB);
// });

// // Visibility Validation
// Then('Element {string} should be visible', async (selector) => {
//     const element = await page.$(selector);
//     const visible = await customValidations.isVisible(element);
//     expect(visible).toBe(true);
// });

// Then('Element {string} should not be visible', async (selector) => {
//     const element = await page.$(selector);
//     const visible = await customValidations.isVisible(element);
//     expect(visible).toBe(false);
// });

// // Disabled State Validation
// Then('Element {string} should be disabled', async (selector) => {
//     const element = await page.$(selector);
//     const disabled = await customValidations.isDisabled(element);
//     expect(disabled).toBe(true);
// });

// Then('Element {string} should be enabled', async (selector) => {
//     const element = await page.$(selector);
//     const disabled = await customValidations.isDisabled(element);
//     expect(disabled).toBe(false);
// });

// // Contains Text Validation
// Then('Element {string} should contain text {string}', async (selector, text) => {
//     const element = await page.$(selector);
//     const contains = await customValidations.containsText(element, text);
//     expect(contains).toBe(true);
// });

// // To Equal Validation
// Then('Element {string} text should equal {string}', async (selector, expectedText) => {
//     const element = await page.$(selector);
//     const actualText = await element.textContent();
//     expect(customValidations.toEqual(actualText.trim(), expectedText)).toBe(true);
// });

// // Attribute Validation
// Then('Element {string} should have attribute {string} with value {string}', async (selector, attrName, attrValue) => {
//     const element = await page.$(selector);
//     const hasAttr = await customValidations.hasAttribute(element, attrName, attrValue);
//     expect(hasAttr).toBe(true);
// });

// // Cleanup
// const { After } = require('@cucumber/cucumber');
// After(async () => {
//     if (browser) {
//         await browser.close();
//     }
// });