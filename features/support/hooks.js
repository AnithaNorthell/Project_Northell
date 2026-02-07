const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000);

let browser;
let page;
let context;

// Hook to launch browser before each scenario
Before(async function () {
    // Create reports directory if it doesn't exist
    const reportsDir = path.join(__dirname, '../../reports/screenshots');
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
    }

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Attach page to the world object for access in step definitions
    this.browser = browser;
    this.page = page;
    this.context = context;

    console.log('✓ Browser launched');
});

// Hook to close browser after each scenario
After(async function (scenario) {
    const screenshotsDir = path.join(__dirname, '../../reports/screenshots');

    // Take screenshot if test case failed
    if (scenario.result.status === 'FAILED') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = path.join(screenshotsDir, `FAILED_${scenario.pickle.name}_${timestamp}.png`);

        if (page) {
            await page.screenshot({ path: screenshotPath });
            console.log(`✗ Screenshot captured: ${screenshotPath}`);

            // Attach screenshot to the scenario for HTML report
            const screenshotBuffer = fs.readFileSync(screenshotPath);
            this.attach(screenshotBuffer, 'image/png');
        }
    }

    // Take screenshot if test case passed
    if (scenario.result.status === 'PASSED') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = path.join(screenshotsDir, `PASSED_${scenario.pickle.name}_${timestamp}.png`);

        if (page) {
            await page.screenshot({ path: screenshotPath });
            console.log(`✓ Screenshot captured: ${screenshotPath}`);

            // Attach screenshot to the scenario for HTML report
            const screenshotBuffer = fs.readFileSync(screenshotPath);
            this.attach(screenshotBuffer, 'image/png');
        }
    }
    // Close browser
    if (page) {
        await page.close();
    }
    if (context) {
        await context.close();
    }
    if (browser) {
        await browser.close();
    }

    console.log('✓ Browser closed');
});
