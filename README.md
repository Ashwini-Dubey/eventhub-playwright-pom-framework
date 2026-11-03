# EventHub Playwright POM Framework

A hands-on project to build a maintainable **UI test automation framework using Playwright, JavaScript, and the Page Object Model (POM)**.

The framework uses the EventHub application as the application under test (AUT) and focuses on applying real-world automation practices through incremental implementation.

## Project Overview

- **Automation Tool:** Playwright
- **Programming Language:** JavaScript (ES Modules)
- **Framework Design:** Page Object Model (POM)
- **Application Under Test:** EventHub
- **Test Type:** UI Automation
- **Browsers:** Chromium, Firefox, WebKit
- **Reporting:** Playwright HTML Report, Allure Report
- **Environment Configuration:** QA and Staging

## Current Progress

### Completed

- [x] Initial project structure created
- [x] Playwright installed and configured
- [x] JavaScript ES Module setup
- [x] Environment configuration for QA and Staging
- [x] Environment selection through `TEST_ENV`
- [x] Playwright configuration connected to environment settings
- [x] Cross-browser configuration for Chromium, Firefox, and WebKit
- [x] Playwright HTML reporting configured
- [x] Allure reporting configured
- [x] Screenshot, video, and trace settings configured
- [x] Git ignore configuration for dependencies, environment files, and generated reports

## Project Structure

```text
EventHub_Playwright_Framework/
│
├── pages/
│   ├── authentication/
│   ├── dashboard/
│   ├── events/
│   └── bookings/
│
├── components/
│
├── tests/
│   ├── authentication/
│   ├── dashboard/
│   ├── events/
│   ├── bookings/
│   └── regression/
│
├── fixtures/
├── test-data/
├── utils/
│
├── config/
│   ├── environments/
│   │   ├── qa.js
│   │   └── staging.js
│   └── environment.js
│
├── global-setup/
├── reports/
├── test-results/
│
├── .github/
│   └── workflows/
│
├── playwright.config.js
├── package.json
├── .env.example
└── README.md
```

_Note: The directory structure is established; implementation of the individual page objects, fixtures, utilities, and test scenarios is ongoing._

## Implementation Roadmap

The framework will be developed incrementally in the following areas:

### 1. Framework Foundation

- Configure Playwright and browser projects
- Configure environment management
- Establish reusable framework components

### 2. Page Object Model Implementation

- Login and Signup page objects
- Dashboard page object
- Event listing, search, and details page objects
- Event creation and management page objects
- Booking and booking history page objects
- Reusable UI components

### 3. Test Automation

- Authentication scenarios
- Dashboard validation
- Event listing and search
- Event details and management
- Ticket booking workflows
- Booking history and cancellation
- Regression test scenarios

### 4. Framework Enhancements

- Custom Playwright fixtures
- Reusable test utilities
- External test data management
- Dynamic test data generation
- Improved assertions and test organization

### 5. Execution and Reporting

- Cross-browser test execution
- Allure report enhancements
- Screenshots, videos, and traces for debugging
- GitHub Actions CI integration

## Running the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the test suite:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

View the Playwright HTML report:

```bash
npx playwright show-report
```

Generate and open the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Learning Objective

The objective of this project is to gain practical experience in designing and implementing a structured Playwright automation framework using JavaScript and POM, with an emphasis on maintainability, reusability, cross-browser execution, and reporting.

---

**Project Status:** Framework foundation in progress.
