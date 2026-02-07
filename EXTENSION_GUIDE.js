// /**
//  * EXTENSION GUIDE - How to Extend the Framework
//  * 
//  * This guide shows how to create custom page objects and add more tests
//  */

// // ============================================
// // 1. CREATING A NEW PAGE OBJECT
// // ============================================

// /*
// Step 1: Create file: features/support/pages/DashboardPage.js

// const BasePage = require('./BasePage');

// class DashboardPage extends BasePage {
//   // Define selectors as getters
//   get welcomeMessage() {
//     return '.welcome-text';
//   }

//   get userProfile() {
//     return '.user-profile';
//   }

//   get logoutButton() {
//     return '#logout';
//   }

//   get dashboardTitle() {
//     return 'h1.page-title';
//   }

//   // Implement page-specific methods
//   async getWelcomeMessage() {
//     return await this.getText(this.welcomeMessage);
//   }

//   async clickUserProfile() {
//     await this.click(this.userProfile);
//   }

//   async logout() {
//     await this.click(this.logoutButton);
//     await this.page.waitForNavigation();
//   }

//   async isDashboardLoaded() {
//     return await this.isVisible(this.dashboardTitle);
//   }
// }

// module.exports = DashboardPage;
// */

// // ============================================
// // 2. ADDING NEW STEP DEFINITIONS
// // ============================================

// /*
// Step 2: Create file: features/step_definitions/dashboard.steps.js

// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('chai');
// const DashboardPage = require('../support/pages/DashboardPage');

// let dashboardPage;

// Given('User is on dashboard', async function() {
//   dashboardPage = new DashboardPage(this.page);
//   const isLoaded = await dashboardPage.isDashboardLoaded();
//   expect(isLoaded).to.be.true;
// });

// Then('User should see welcome message', async function() {
//   const message = await dashboardPage.getWelcomeMessage();
//   expect(message).to.exist;
// });

// When('User clicks on profile', async function() {
//   await dashboardPage.clickUserProfile();
// });

// When('User logs out', async function() {
//   await dashboardPage.logout();
// });
// */

// // ============================================
// // 3. ADDING CUSTOM METHODS TO CUSTOMMETHODS.JS
// // ============================================

// /*
// Open: features/support/CustomMethods.js

// Add new method in the class:

//   // New custom method example
//   async searchForItem(searchSelector, itemName) {
//     await this.page.fill(searchSelector, itemName);
//     await this.page.waitForSelector('.search-results');
//     console.log(`✓ Searched for: ${itemName}`);
//   }

//   async selectFirstSearchResult() {
//     await this.page.click('.search-results li:first-child');
//     console.log(`✓ Selected first search result`);
//   }

//   async addItemToCart(itemSelector) {
//     await this.page.click(`${itemSelector} button.add-to-cart`);
//     await this.page.waitForSelector('.cart-count');
//     console.log(`✓ Item added to cart`);
//   }
// */

// // ============================================
// // 4. CREATING NEW FEATURE FILES
// // ============================================

// /*
// Step 3: Create file: features/dashboard.feature

// Feature: Dashboard Functionality
//   As a logged-in user
//   I want to access the dashboard
//   So that I can manage my account

//   Scenario: View dashboard after login
//     Given User navigates to login page
//     When User logs in with credentials "testuser" and "password123"
//     Then User is on dashboard

//   Scenario: Logout from dashboard
//     Given User is on dashboard
//     When User logs out
//     Then User should be on login page
// */

// // ============================================
// // 5. ADDING TAGS FOR SELECTIVE TEST RUN
// // ============================================

// /*
// Update: features/login.feature

// @smoke @regression
// Feature: User Login Functionality
  
//   @smoke
//   Scenario: Successful login with valid credentials
//     Given User navigates to login page
//     When User logs in with credentials "testuser" and "password123"
//     Then User should see error message "Welcome"

//   @regression
//   Scenario: Login button should be enabled
//     ...

// Run specific tests:
//   npx cucumber-js --tags "@smoke"
//   npx cucumber-js --tags "@regression"
//   npx cucumber-js --tags "@smoke and @login"
// */

// // ============================================
// // 6. ADDING CONDITIONAL STEPS
// // ============================================

// /*
// In step definitions:

// const { Given, When, Then, Before } = require('@cucumber/cucumber');

// Before(function(scenario) {
//   if (scenario.pickle.tags.find(tag => tag.name === '@only-chrome')) {
//     // Run only on Chrome
//   }
// });

// Before(function(scenario) {
//   if (scenario.pickle.tags.find(tag => tag.name === '@headless')) {
//     // Run in headless mode
//   }
// });
// */

// // ============================================
// // 7. ADDING DATA-DRIVEN TESTS
// // ============================================

// /*
// Feature file: features/data-driven.feature

// Feature: Data Driven Login Test

//   Scenario Outline: Login with multiple credentials
//     Given User navigates to login page
//     When User logs in with credentials "<username>" and "<password>"
//     Then <result>

//     Examples:
//       | username        | password     | result                              |
//       | user1@test.com  | Password123  | User should see "Welcome" message   |
//       | user2@test.com  | Password456  | User should see "Welcome" message   |
//       | invalid@test.com| WrongPass    | User should see error "Invalid"     |

// Step definition to handle this:

// When('User logs in with credentials {string} and {string}', 
//   async function(username, password) {
//     await loginPage.login(username, password);
//   }
// );
// */

// // ============================================
// // 8. USING BEFORE/AFTER HOOKS WITH TAGS
// // ============================================

// /*
// In: features/support/hooks.js

// const { Before, After } = require('@cucumber/cucumber');

// Before('@chrome', async function() {
//   // Setup specific for Chrome tests
// });

// Before('@database', async function() {
//   // Setup database connection
// });

// After('@database', async function() {
//   // Cleanup database
// });

// After('@screenshot', async function() {
//   // Take screenshot for these tests
// });
// */

// // ============================================
// // 9. ADDING CUSTOM WORLD PROPERTIES
// // ============================================

// /*
// In: features/support/hooks.js

// const { setWorldConstructor, World } = require('@cucumber/cucumber');

// class CustomWorld extends World {
//   constructor(options) {
//     super(options);
//     this.testStartTime = new Date();
//     this.testData = {};
//   }

//   async saveTestData(key, value) {
//     this.testData[key] = value;
//   }

//   getTestData(key) {
//     return this.testData[key];
//   }

//   getTestDuration() {
//     return new Date() - this.testStartTime;
//   }
// }

// setWorldConstructor(CustomWorld);

// // Now in step definitions:
// Then('I save result', function() {
//   this.saveTestData('lastResult', 'success');
// });

// Then('I verify saved result', function() {
//   const result = this.getTestData('lastResult');
//   expect(result).to.equal('success');
// });
// */

// // ============================================
// // 10. PARALLEL TEST EXECUTION
// // ============================================

// /*
// In: cucumber.js

// module.exports = {
//   default: {
//     parallel: 2,  // Run 2 scenarios in parallel
//     require: [
//       'features/step_definitions/**/*.js',
// 'features/support/**/*.js'
//     ],
// format: [
//     'progress-bar',
//     'html:reports/index.html',
//     'json:reports/cucumber-report.json'
// ]
//   }
// };

// Run tests in parallel:
//   npx cucumber - js
//     */

// // ============================================
// // PROJECT STRUCTURE AFTER EXTENSIONS
// // ============================================

// /*
// features/
// ├── login.feature
// ├── dashboard.feature
// ├── profile.feature
// ├── settings.feature
// ├── step_definitions/
// │   ├── login.steps.js
// │   ├── dashboard.steps.js
// │   ├── profile.steps.js
// │   ├── settings.steps.js
// │   ├── common.steps.js
// │   └── custom_methods.example.js
// └── support/
//     ├── hooks.js
//     ├── CustomMethods.js
//     └── pages/
//         ├── BasePage.js
//         ├── LoginPage.js
//         ├── DashboardPage.js
//         ├── ProfilePage.js
//         └── SettingsPage.js
// */

// // ============================================
// // BEST PRACTICES
// // ============================================

// /*
// 1. SELECTORS
//    - Use data-test attributes: data-test="login-button"
//    - Avoid hardcoded indices: nth-child(3)
//    - Use meaningful CSS selectors

// 2. METHODS
//    - One responsibility per method
//    - Reuse BasePage methods
//    - Add meaningful console logs

// 3. STEPS
//    - Keep steps simple and readable
//    - Use page objects for element interaction
//    - Use custom methods for complex actions

// 4. FEATURES
//    - One feature per file
//    - Clear scenario names
//    - Use proper tags (@smoke, @regression)

// 5. ASSERTIONS
//    - Use Chai for all assertions
//    - Meaningful error messages
//    - Verify state, not implementation

// 6. WAITING
//    - Use explicit waits (waitForElement)
//    - Avoid hard waits (wait)
//    - Set reasonable timeouts

// 7. LOGGING
//    - Add console.log in all methods
//    - Help with debugging failed tests
//    - Track test execution flow

// 8. ERROR HANDLING
//    - Try-catch for risky operations
//    - Meaningful error messages
//    - Fail fast on critical issues
// */

// console.log('✓ Extension guide loaded - Start creating your tests!');
