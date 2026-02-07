# Playwright + Cucumber + Chai Test Automation Framework

## Project Structure

```
playwright-cucumber-automation/
├── features/
│   ├── login.feature              # Feature files with Gherkin syntax
│   ├── step_definitions/
│   │   └── login.steps.js         # Step definitions matching feature steps
│   └── support/
│       ├── hooks.js               # Before/After hooks for browser setup
│       ├── CustomMethods.js        # Reusable custom helper methods
│       └── pages/
│           ├── BasePage.js         # Base page object with common methods
│           └── LoginPage.js        # Page object for login page
├── reports/
│   ├── index.html                 # HTML cucumber report
│   ├── cucumber-report.json        # JSON report
│   └── screenshots/               # Failed test screenshots
├── cucumber.js                     # Cucumber configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:

- **@playwright/test**: Playwright testing library
- **playwright**: Playwright browser automation
- **@cucumber/cucumber**: Cucumber BDD framework
- **chai**: Assertion library

### 2. Run Tests

```bash
# Run all tests
npm test

# Run tests with HTML report
npm run test:report
```

## Key Features

### 1. **Hooks (Browser Management)**

File: `features/support/hooks.js`

- **Before Hook**: Launches browser before each scenario
  - Creates browser context
  - Initializes page object
  - Creates screenshots directory

- **After Hook**: Closes browser after each scenario
  - Takes screenshot on test failure
  - Attaches screenshot to HTML report
  - Closes browser and context

### 2. **Page Object Pattern**

**BasePage** (`features/support/pages/BasePage.js`):

- Common methods used across all pages:
  - `navigateTo(url)` - Navigate to URL
  - `fillText(selector, text)` - Fill input field
  - `click(selector)` - Click element
  - `getText(selector)` - Get element text
  - `isVisible(selector)` - Check visibility
  - `waitForElement(selector, timeout)` - Wait for element
  - `doubleClick(selector)` - Double click
  - `hoverOver(selector)` - Hover over element
  - `selectDropdown(selector, value)` - Select from dropdown
  - `takeScreenshot(fileName)` - Manual screenshot
  - `getPageTitle()` - Get page title
  - `getCurrentURL()` - Get current URL
  - And many more...

**LoginPage** (`features/support/pages/LoginPage.js`):

- Page-specific methods for login functionality:
  - `navigateToLogin(url)` - Navigate to login page
  - `enterUsername(username)` - Enter username
  - `enterPassword(password)` - Enter password
  - `clickLoginButton()` - Click login
  - `login(username, password)` - Complete login action

### 3. **Custom Methods**

File: `features/support/CustomMethods.js`

Reusable helper methods for common actions:

- `loginToApplication(url, username, password)` - Complete login flow
- `fillForm(formData)` - Fill multiple form fields
- `submitForm(submitButtonSelector)` - Submit form and wait
- `handleDialog(accept)` - Handle browser dialogs
- `waitForAPIResponse(urlPattern, timeout)` - Wait for API calls
- `uploadFile(fileInputSelector, filePath)` - Upload files
- `scrollToElement(selector)` - Scroll to element
- `verifyElementText(selector, expectedText)` - Verify text
- `getTableData(tableSelector)` - Extract table data
- `clearAndFill(selector, text)` - Clear and fill input
- `waitForElementToDisappear(selector, timeout)` - Wait for element removal
- `executeJavaScript(script)` - Execute JS on page
- `getAllCookies()` - Get all cookies
- `addCookie(name, value)` - Add cookie

### 4. **HTML Report with Screenshots**

- Automatic screenshot capture on test failure
- Screenshots attached to HTML report
- Report location: `reports/index.html`
- Screenshots location: `reports/screenshots/`

## Step Definition Example

```javascript
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const LoginPage = require("../support/pages/LoginPage");

let loginPage;

Given("User navigates to login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin("https://example.com/login");
});

When("User enters username {string}", async function (username) {
  await loginPage.enterUsername(username);
});

Then("Login button should be enabled", async function () {
  const isEnabled = await loginPage.isLoginButtonEnabled();
  expect(isEnabled).to.be.true;
});
```

## Feature File Example

```gherkin
Feature: User Login Functionality
  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given User navigates to login page
    When User logs in with credentials "testuser" and "password123"
    Then User should see error message "Welcome"
```

## Configuration Files

### cucumber.js

- Specifies feature file locations
- Configures HTML report output
- Sets up JSON report format
- Defines required files and hooks

### package.json

- Lists all dependencies
- Defines npm scripts for running tests

## Creating New Tests

1. **Create Feature File**
   - Add `.feature` file in `features/` directory
   - Write test scenarios in Gherkin syntax

2. **Create Step Definitions**
   - Add `.js` file in `features/step_definitions/`
   - Import page objects and custom methods
   - Implement step definitions

3. **Create Page Objects** (if needed)
   - Extend `BasePage` class
   - Define selectors as getters
   - Implement page-specific methods

4. **Use Custom Methods**
   - Import `CustomMethods` where needed
   - Call relevant helper methods

## Accessing Browser Context

In any step definition, access the page and browser via `this`:

```javascript
this.page; // Playwright page object
this.browser; // Playwright browser object
this.context; // Playwright context object
```

## Example Test Execution

```bash
# Run all tests
npm test

# Run specific feature
npx cucumber-js features/login.feature

# Run with specific tag
npx cucumber-js --tags "@smoke"

# Generate HTML report
npm run test:report
```

## Assertion Examples with Chai

```javascript
const { expect } = require("chai");

expect(value).to.be.true;
expect(value).to.be.false;
expect(text).to.include("expected text");
expect(count).to.equal(5);
expect(array).to.have.lengthOf(3);
expect(value).to.be.null;
expect(value).to.be.undefined;
```

## Troubleshooting

1. **Browser not launching**: Ensure Playwright browsers are installed with `npx playwright install`
2. **Element not found**: Verify selectors are correct and element is visible
3. **Report not generated**: Check `reports/` directory exists
4. **Screenshots not appearing**: Ensure test fails to trigger screenshot capture

## Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
- [Chai Assertion Library](https://www.chaijs.com)
