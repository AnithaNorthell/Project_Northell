const { expect } = require('chai');
/**
 * BasePage - Base class for all page objects
 * Contains common methods and utilities for all pages
 */
class BasePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigate to a specific URL
     * @param {string} url - The URL to navigate to
     */
    async navigateTo(url) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
        // await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        console.log(`✓ Navigated to ${url}`);
    }

    /**
     * Wait for a specific time (in milliseconds)
     * @param {number} ms - Time in milliseconds
     */
    async wait(ms) {
        await this.page.waitForTimeout(ms);
    }

    /**
     * Fill text in an input field
     * @param {string} selector - CSS selector
     * @param {string} text - Text to fill
     */
    async fillText(selector, text) {
        await this.page.fill(selector, text);
        console.log(`✓ Filled text "${text}" in selector: ${selector}`);
    }

    /**
     * Click on an element
     * @param {string} selector - CSS selector
     */
    async click(selector) {
        await this.page.click(selector);
        console.log(`✓ Clicked on: ${selector}`);
    }

    /**
     * Get text from an element
     * @param {string} selector - CSS selector
     * @returns {Promise<string>} - Text content
     */
    // async getText(selector) {
    //     const text = await this.page.textContent(selector);
    //     console.log(`✓ Got text: ${text}`);
    //     return text;
    // }
    async getText(selector) {
        const text = await this.page.textContent(selector);
        const trimmedText = text?.trim();

        console.log(`✓ Got text: ${trimmedText}`);
        return trimmedText;
    }

    /**
     * Check if element is visible
     * @param {string} selector - CSS selector
     * @returns {Promise<boolean>} - True if visible
     */
    async isVisible(selector) {
        const visible = await this.page.isVisible(selector);
        console.log(`✓ Element visibility for ${selector}: ${visible}`);
        return visible;
    }
    async isVisibleTrue(selector) {
        const visible = await this.page.isVisible(selector);
        console.log(`✓ Element visibility for ${selector}: ${visible}`);
        expect(visible, `Expected element ${selector} to be visible`).to.be.true;
    }
    /**
     * Wait for element to be visible
     * @param {string} selector - CSS selector
     * @param {number} timeout - Timeout in milliseconds (default: 5000)
     */
    async waitForElement(selector, timeout = 5000) {
        await this.page.waitForSelector(selector, { timeout });
        console.log(`✓ Element visible: ${selector}`);
    }

    /**
     * Double click on an element
     * @param {string} selector - CSS selector
     */
    async doubleClick(selector) {
        await this.page.dblclick(selector);
        console.log(`✓ Double clicked on: ${selector}`);
    }

    /**
     * Right click on an element
     * @param {string} selector - CSS selector
     */
    async rightClick(selector) {
        await this.page.click(selector, { button: 'right' });
        console.log(`✓ Right clicked on: ${selector}`);
    }

    /**
     * Hover over an element
     * @param {string} selector - CSS selector
     */
    async hoverOver(selector) {
        await this.page.hover(selector);
        console.log(`✓ Hovered over: ${selector}`);
    }

    /**
     * Select option from dropdown
     * @param {string} selector - CSS selector
     * @param {string} value - Option value
     */
    async selectDropdown(selector, value) {
        await this.page.selectOption(selector, value);
        console.log(`✓ Selected option "${value}" from dropdown: ${selector}`);
    }

    /**
     * Get attribute value
     * @param {string} selector - CSS selector
     * @param {string} attributeName - Attribute name
     * @returns {Promise<string>} - Attribute value
     */
    async getAttribute(selector, attributeName) {
        const value = await this.page.getAttribute(selector, attributeName);
        console.log(`✓ Got attribute "${attributeName}": ${value}`);
        return value;
    }

    /**
     * Check if element is enabled
     * @param {string} selector - CSS selector
     * @returns {Promise<boolean>} - True if enabled
     */
    async isEnabled(selector) {
        const enabled = await this.page.isEnabled(selector);
        console.log(`✓ Element enabled status for ${selector}: ${enabled}`);
        return enabled;
    }

    /**
     * Clear text from input field
     * @param {string} selector - CSS selector
     */
    async clearText(selector) {
        await this.page.fill(selector, '');
        console.log(`✓ Cleared text from: ${selector}`);
    }

    /**
     * Press a key
     * @param {string} selector - CSS selector
     * @param {string} key - Key to press
     */
    async pressKey(selector, key) {
        await this.page.press(selector, key);
        console.log(`✓ Pressed key "${key}" on: ${selector}`);
    }

    /**
     * Get all text from elements matching selector
     * @param {string} selector - CSS selector
     * @returns {Promise<string[]>} - Array of text contents
     */
    async getAllText(selector) {
        const texts = await this.page.$$eval(selector, elements =>
            elements.map(el => el.textContent)
        );
        console.log(`✓ Got all texts: ${texts}`);
        return texts;
    }
    async AssertEqualText(selector, expectedText) {
        const actualText = await this.page.textContent(selector);
        const trimmedText = actualText?.trim();

        console.log(`✓ Actual Text: ${trimmedText}`);
        console.log(`✓ Expected Text: ${expectedText}`);

        expect(trimmedText).to.equal(expectedText);
    }

    /**
     * Switch to iframe
     * @param {string} iframeSelector - CSS selector for iframe
     * @returns {Promise<*>} - Frame object
     */
    async switchToFrame(iframeSelector) {
        const frameHandle = await this.page.$(iframeSelector);
        const frame = await frameHandle.contentFrame();
        console.log(`✓ Switched to frame: ${iframeSelector}`);
        return frame;
    }

    /**
     * Take screenshot
     * @param {string} fileName - File name for screenshot
     */
    async takeScreenshot(fileName) {
        const path = require('path');
        const screenshotPath = path.join(__dirname, '../../reports/screenshots', `${fileName}.png`);
        await this.page.screenshot({ path: screenshotPath });
        console.log(`✓ Screenshot taken: ${screenshotPath}`);
    }

    /**
     * Get page title
     * @returns {Promise<string>} - Page title
     */
    async getPageTitle() {
        const title = await this.page.title();
        console.log(`✓ Page title: ${title}`);
        return title;
    }

    /**
     * Get current URL
     * @returns {Promise<string>} - Current URL
     */
    async getCurrentURL() {
        const url = this.page.url();
        console.log(`✓ Current URL: ${url}`);
        return url;
    }
}

module.exports = BasePage;
