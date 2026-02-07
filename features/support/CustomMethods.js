/**
 * CustomMethods - Custom helper methods for test execution
 * Reusable methods for common actions across multiple test cases
 */
class CustomMethods {
    constructor(page) {
        this.page = page;
    }

    /**
     * Login to application
     * @param {string} url - Login page URL
     * @param {string} username - Username
     * @param {string} password - Password
     */
    async loginToApplication(url, username, password) {
        await this.page.goto(url);
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
        await this.page.waitForNavigation();
        console.log(`✓ Successfully logged in as ${username}`);
    }

    /**
     * Fill form with multiple fields
     * @param {object} formData - Object with selector as key and value as value
     */
    async fillForm(formData) {
        for (const [selector, value] of Object.entries(formData)) {
            await this.page.fill(selector, value);
            console.log(`✓ Filled ${selector} with value: ${value}`);
        }
    }

    /**
     * Submit form and wait for response
     * @param {string} submitButtonSelector - Submit button selector
     */
    async submitForm(submitButtonSelector) {
        const responsePromise = this.page.waitForNavigation();
        await this.page.click(submitButtonSelector);
        await responsePromise;
        console.log('✓ Form submitted successfully');
    }

    /**
     * Handle popup/dialog with confirmation
     * @param {boolean} accept - True to accept, false to cancel
     */
    async handleDialog(accept = true) {
        this.page.once('dialog', async dialog => {
            if (accept) {
                await dialog.accept();
                console.log('✓ Dialog accepted');
            } else {
                await dialog.dismiss();
                console.log('✓ Dialog dismissed');
            }
        });
    }

    /**
     * Wait for API response
     * @param {string} urlPattern - URL pattern to match
     * @param {number} timeout - Timeout in milliseconds
     */
    async waitForAPIResponse(urlPattern, timeout = 5000) {
        const response = await this.page.waitForResponse(
            response => response.url().includes(urlPattern),
            { timeout }
        );
        console.log(`✓ API response received from: ${response.url()}`);
        return response;
    }

    /**
     * Upload file
     * @param {string} fileInputSelector - File input selector
     * @param {string} filePath - Path to file
     */
    async uploadFile(fileInputSelector, filePath) {
        await this.page.setInputFiles(fileInputSelector, filePath);
        console.log(`✓ File uploaded: ${filePath}`);
    }

    /**
     * Scroll to element
     * @param {string} selector - Element selector
     */
    async scrollToElement(selector) {
        await this.page.locator(selector).scrollIntoViewIfNeeded();
        console.log(`✓ Scrolled to element: ${selector}`);
    }

    /**
     * Verify element text matches expected value
     * @param {string} selector - Element selector
     * @param {string} expectedText - Expected text
     */
    async verifyElementText(selector, expectedText) {
        const actualText = await this.page.textContent(selector);
        if (actualText.includes(expectedText)) {
            console.log(`✓ Text verification passed: "${expectedText}"`);
            return true;
        } else {
            throw new Error(`Text mismatch. Expected: "${expectedText}", Got: "${actualText}"`);
        }
    }

    /**
     * Get all table data
     * @param {string} tableSelector - Table selector
     * @returns {Promise<Array>} - Array of table rows
     */
    async getTableData(tableSelector) {
        const tableData = await this.page.$$eval(`${tableSelector} tbody tr`, rows =>
            rows.map(row => {
                const cells = row.querySelectorAll('td');
                return Array.from(cells).map(cell => cell.textContent);
            })
        );
        console.log(`✓ Retrieved table data: ${tableData.length} rows`);
        return tableData;
    }

    /**
     * Clear and fill input field
     * @param {string} selector - Input field selector
     * @param {string} text - Text to fill
     */
    async clearAndFill(selector, text) {
        await this.page.fill(selector, '');
        await this.page.fill(selector, text);
        console.log(`✓ Cleared and filled "${text}" in ${selector}`);
    }

    /**
     * Switch to specific window/tab
     * @param {number} index - Window/tab index
     */
    async switchToWindow(index) {
        const pages = await this.page.context().pages();
        if (pages[index]) {
            this.page = pages[index];
            console.log(`✓ Switched to window/tab ${index}`);
        } else {
            throw new Error(`Window/tab at index ${index} not found`);
        }
    }

    /**
     * Wait for element to disappear
     * @param {string} selector - Element selector
     * @param {number} timeout - Timeout in milliseconds
     */
    async waitForElementToDisappear(selector, timeout = 5000) {
        await this.page.waitForSelector(selector, { state: 'hidden', timeout });
        console.log(`✓ Element disappeared: ${selector}`);
    }

    /**
     * Execute JavaScript on page
     * @param {string} script - JavaScript code to execute
     * @returns {Promise<*>} - Result of execution
     */
    async executeJavaScript(script) {
        const result = await this.page.evaluate(script);
        console.log(`✓ JavaScript executed successfully`);
        return result;
    }

    /**
     * Get all cookies
     * @returns {Promise<Array>} - Array of cookies
     */
    async getAllCookies() {
        const cookies = await this.page.context().cookies();
        console.log(`✓ Retrieved ${cookies.length} cookies`);
        return cookies;
    }

    /**
     * Add cookie
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     */
    async addCookie(name, value) {
        await this.page.context().addCookies([
            {
                name: name,
                value: value,
                url: this.page.url()
            }
        ]);
        console.log(`✓ Cookie added: ${name}=${value}`);
    }
}

module.exports = CustomMethods;
