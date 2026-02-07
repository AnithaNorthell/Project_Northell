# Playwright Test Framework - Quick Start

## Setup Instructions

### 1. Install Node.js

If not already installed, download from https://nodejs.org

### 2. Install Dependencies

```powershell
npm install
```

### 3. Install Playwright Browsers

```powershell
npx playwright install
```

## Project Structure Overview

- **features/**: Cucumber feature files and step definitions
  - `login.feature`: Example test scenario
  - `step_definitions/login.steps.js`: Step implementations
  - `support/hooks.js`: Browser lifecycle management
  - `support/pages/`: Page objects (BasePage, LoginPage)
  - `support/CustomMethods.js`: Reusable test utilities

- **reports/**: Generated test reports
  - `index.html`: HTML report (after running tests)
  - `screenshots/`: Failed test screenshots

## Running Tests

### All Tests

```powershell
npm test
```

### Specific Feature

```powershell
npx cucumber-js features/login.feature
```

### With HTML Report

```powershell
npm run test:report
```

## Key Features Implemented

✓ **Hooks**: Auto-launch/close browser before/after tests
✓ **Screenshots**: Auto-capture on test failure in HTML report
✓ **Page Objects**: BasePage with 20+ reusable methods
✓ **Custom Methods**: 15+ helper methods for common actions
✓ **Assertions**: Chai assertions integrated
✓ **HTML Reports**: Auto-generated with Cucumber

## Creating Your First Test

1. Create a feature file in `features/`
2. Write Gherkin scenarios
3. Implement step definitions in `features/step_definitions/`
4. Use page objects to interact with elements
5. Run tests with `npm test`

## Documentation

See `README.md` for complete documentation
