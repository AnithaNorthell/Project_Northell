# Playwright + Cucumber + Chai Test Automation Framework

## Complete Setup Summary

### ✅ Installation Complete

Your automation testing framework is now fully configured with:

- **Playwright** - Browser automation (Chromium installed)
- **Cucumber** - BDD testing framework
- **Chai** - Assertion library
- **JavaScript** - Test implementation language

---

## 📁 Project Structure

```
d:\WorkPlace/
├── features/
│   ├── login.feature                          # Example feature file
│   ├── step_definitions/
│   │   ├── login.steps.js                    # Login step definitions
│   │   ├── custom_methods.example.js         # CustomMethods usage examples
│   │   └── usage_examples.js                 # Comprehensive usage examples
│   └── support/
│       ├── hooks.js                          # Browser hooks (BEFORE/AFTER)
│       ├── CustomMethods.js                  # 15+ helper methods
│       └── pages/
│           ├── BasePage.js                   # Base page with 20+ methods
│           └── LoginPage.js                  # Example page object
├── reports/
│   ├── index.html                           # Generated HTML report
│   ├── cucumber-report.json                 # JSON report
│   └── screenshots/                         # Failed test screenshots
├── cucumber.js                              # Cucumber config
├── package.json                             # Dependencies
├── README.md                                # Full documentation
├── QUICKSTART.md                            # Quick reference
└── .gitignore                               # Git ignore rules
```

---

## 🎯 Key Features Implemented

### 1. **HOOKS (Browser Lifecycle Management)**

File: `features/support/hooks.js`

✓ **Before Hook** - Launches browser before each test

- Creates Chromium browser instance
- Initializes page context
- Prepares screenshot directory
- Available via `this.page`, `this.browser`, `this.context`

✓ **After Hook** - Closes browser after each test

- **Captures screenshot on failure** automatically
- Attaches screenshot to HTML report
- Closes browser and context gracefully

### 2. **PAGE OBJECT PATTERN**

**BasePage** (`features/support/pages/BasePage.js`)
20+ reusable methods:

- Navigation: `navigateTo()`, `getPageTitle()`, `getCurrentURL()`
- Input: `fillText()`, `clearText()`, `selectDropdown()`
- Click: `click()`, `doubleClick()`, `rightClick()`
- Wait: `waitForElement()`, `waitForElementToDisappear()`, `wait()`
- Interaction: `hoverOver()`, `pressKey()`, `scrollToElement()`
- Verification: `isVisible()`, `isEnabled()`, `getText()`, `getAttribute()`
- File: `uploadFile()`
- Screenshots: `takeScreenshot()`
- And more...

**LoginPage** (`features/support/pages/LoginPage.js`)
Example page object extending BasePage:

- `navigateToLogin()` - Navigate to login page
- `enterUsername()`, `enterPassword()` - Fill credentials
- `clickLoginButton()` - Click login
- `login()` - Complete login flow in one method
- `getErrorMessage()` - Retrieve error messages
- `isLoginButtonEnabled()` - Check button state

### 3. **CUSTOM METHODS (Reusable Helpers)**

File: `features/support/CustomMethods.js`

15+ helper methods for common actions:

- `loginToApplication()` - Complete login flow
- `fillForm()` - Fill multiple form fields at once
- `submitForm()` - Submit and wait for response
- `handleDialog()` - Accept/dismiss browser dialogs
- `waitForAPIResponse()` - Wait for specific API calls
- `uploadFile()` - Upload files to input
- `scrollToElement()` - Smart scrolling
- `verifyElementText()` - Assert element text
- `getTableData()` - Extract table data
- `clearAndFill()` - Clear and fill input
- `switchToWindow()` - Switch between tabs/windows
- `executeJavaScript()` - Execute JS on page
- `getAllCookies()` - Get browser cookies
- `addCookie()` - Set cookies
- And more...

### 4. **HTML REPORT WITH SCREENSHOTS**

✓ Automatic screenshot capture on **test failure**
✓ Screenshots embedded in **HTML report**
✓ Report location: `reports/index.html`
✓ Screenshots directory: `reports/screenshots/`
✓ JSON report format: `reports/cucumber-report.json`

---

## 🚀 Running Tests

### Run All Tests

```powershell
npm test
```

### Run Specific Feature

```powershell
npx cucumber-js features/login.feature
```

### Run Specific Tags

```powershell
npx cucumber-js --tags "@smoke"
```

### Generate HTML Report

```powershell
npm run test:report
```

### View Reports

- Open `reports/index.html` in browser
- Check failed test screenshots in `reports/screenshots/`

---

## 📝 Quick Example

### 1. Create Feature File

```gherkin
Feature: User Login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully
```

### 2. Create Step Definitions

```javascript
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const LoginPage = require("../support/pages/LoginPage");

let loginPage;

Given("I am on the login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin("https://example.com");
});

When("I enter valid credentials", async function () {
  await loginPage.login("user", "password");
});

Then("I should be logged in successfully", async function () {
  const title = await loginPage.getPageTitle();
  expect(title).to.include("Dashboard");
});
```

### 3. Run Tests

```powershell
npm test
```

---

## 📚 Using Page Objects

```javascript
const LoginPage = require("../support/pages/LoginPage");

let loginPage;

Given("I am on login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin("https://example.com");
});

When("I login", async function () {
  await loginPage.login("username", "password");
});
```

---

## 🛠️ Using Custom Methods

```javascript
const CustomMethods = require("../support/CustomMethods");

let custom;

Given("I initialize helpers", function () {
  custom = new CustomMethods(this.page);
});

When("I fill and submit form", async function () {
  await custom.fillForm({
    "#name": "John",
    "#email": "john@example.com",
  });
  await custom.submitForm("#submitBtn");
});

When("I wait for API", async function () {
  await custom.waitForAPIResponse("api/users");
});
```

---

## 🧪 Assertion Examples (Chai)

```javascript
const { expect } = require("chai");

expect(value).to.be.true;
expect(value).to.be.false;
expect(text).to.include("expected");
expect(count).to.equal(5);
expect(array).to.have.lengthOf(3);
expect(value).to.exist;
expect(value).to.be.null;
```

---

## 📋 Accessing Browser Context

In any step definition:

```javascript
this.page; // Playwright page object
this.browser; // Playwright browser instance
this.context; // Playwright context
```

---

## 🎓 Example Files Included

1. **login.feature** - Sample feature file
2. **login.steps.js** - Sample step definitions
3. **custom_methods.example.js** - CustomMethods usage examples
4. **usage_examples.js** - 10 comprehensive usage examples
5. **BasePage.js** - Base page with 20+ methods
6. **LoginPage.js** - Example page object
7. **CustomMethods.js** - 15+ helper methods

---

## 🔧 Advanced Features

### Screenshot on Failure

Automatically captured and attached to HTML report in hooks.js

### Reusable Step Definitions

Use the same steps across multiple features

### Page Object Abstraction

Separate selectors from test logic

### Custom Methods Library

Share common actions across tests

### HTML Reporting

View detailed test results with embedded screenshots

---

## 📖 Documentation

- **README.md** - Complete documentation
- **QUICKSTART.md** - Quick reference guide
- **usage_examples.js** - 10 practical examples
- **custom_methods.example.js** - CustomMethods examples

---

## ✨ Next Steps

1. Update selectors in page objects to match your application
2. Modify feature files with your test scenarios
3. Create additional page objects for other pages
4. Add more custom methods as needed
5. Run tests: `npm test`
6. View reports in `reports/index.html`

---

## 🆘 Troubleshooting

**Browser not launching?**

```powershell
npx playwright install
```

**Element not found?**

- Verify selectors are correct
- Check element is loaded before interaction
- Use `waitForElement()` method

**Report not generated?**

- Ensure `reports/` directory exists
- Run with: `npm run test:report`

**Tests failing?**

- Check console output for error details
- Look for screenshots in `reports/screenshots/`
- Verify URLs and selectors in page objects

---

## 📞 Support

All files are well-documented with comments. Refer to:

- Method comments in BasePage.js
- CustomMethods.js for available helpers
- usage_examples.js for practical examples

**Happy Testing! 🎉**
