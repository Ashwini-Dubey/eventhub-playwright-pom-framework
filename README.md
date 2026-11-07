# EventHub Playwright POM Framework

A hands-on **UI test automation framework built with Playwright, JavaScript (ES Modules), and the Page Object Model (POM)**.

The [EventHub application](https://eventhub.rahulshettyacademy.com) is used as the application under test (AUT). The framework is being developed incrementally, with an emphasis on practical implementation, maintainability, and reusable page objects.

## Project Overview

| Area | Details |
|---|---|
| Automation | Playwright Test |
| Language | JavaScript (ES Modules) |
| Design pattern | Page Object Model (POM) |
| Application under test | EventHub |
| Current scope | UI automation |
| Browsers configured | Chromium, Firefox, WebKit |
| Reporting | Playwright HTML, Allure |
| Environment configuration | QA and Staging |
| Test data | JSON files |

> **Scope note:** This repository currently focuses on UI automation. API automation is not part of the current implementation.

## Current Implementation Status

### Completed

- [x] Project structure and Playwright setup
- [x] JavaScript ES Module configuration
- [x] QA and Staging environment configuration selected through `TEST_ENV`
- [x] Chromium, Firefox, and WebKit projects configured
- [x] Playwright HTML and Allure reporters configured
- [x] Screenshot, video, and trace collection settings configured
- [x] Authentication Page Objects: `LoginPage` and `SignupPage`
- [x] Dashboard Page Object
- [x] Event Page Objects: `EventsPage`, `CreateEventPage`, and `EventDetailsPage`
- [x] Booking Page Objects: `BookingListingPage` and `BookingDetailsPage`
- [x] Custom Playwright fixtures for the implemented Page Objects
- [x] JSON test data files for users and events
- [x] Login test scenarios for valid credentials, invalid credentials, and a newly registered user
- [x] Login test execution completed successfully

### In Progress

- [ ] Expand automated test coverage beyond login
- [ ] Implement and execute signup, dashboard, event, and booking scenarios
- [ ] Validate and refine Page Object locators through test execution
- [ ] Add reusable utilities and date/data-generation helpers
- [ ] Add shared UI component abstractions when genuine reuse is identified
- [ ] Complete booking workflow coverage, including booking details and cancellation

### Planned

- [ ] Add environment configuration validation and complete the `.env.example` template
- [ ] Add GitHub Actions CI workflow
- [ ] Improve reporting and execution diagnostics as test coverage grows

The checklist reflects the current repository state; folders or placeholder files are not treated as completed implementations.

## Project Structure

```text
EventHub_Playwright_Framework/
├── pages/
│   ├── authentication/
│   │   ├── LoginPage.js
│   │   └── SignupPage.js
│   ├── dashboard/
│   │   └── DashboardPage.js
│   ├── events/
│   │   ├── EventsPage.js
│   │   ├── CreateEventPage.js
│   │   └── EventDetailsPage.js
│   └── bookings/
│       ├── BookingListingPage.js
│       └── BookingDetailsPage.js
├── components/                 # Reserved for reusable UI components
├── fixtures/
│   └── testFixtures.js
├── tests/
│   ├── authentication/
│   │   ├── login.spec.js
│   │   └── signup.spec.js
│   ├── dashboard/
│   ├── events/
│   ├── bookings/
│   └── regression/
├── test-data/
│   ├── users.json
│   ├── events.json
│   └── bookings.json
├── utils/                      # Utility implementations planned
├── config/
│   ├── environment.js
│   └── environments/
│       ├── qa.js
│       └── staging.js
├── global-setup/
├── playwright.config.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

## Framework Design

The project follows a straightforward POM structure:

- **Tests** contain test scenarios and business-level assertions.
- **Page Objects** encapsulate page locators and page-level actions.
- **Fixtures** create and provide Page Object instances to tests.
- **Test data** is maintained separately in JSON files.
- **Configuration** selects the target environment and supplies the application base URL.

For example, tests import the extended `test` and `expect` from `fixtures/testFixtures.js`. The fixtures create the requested Page Objects, so tests do not need to instantiate them manually.

## Setup

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
npx playwright install
```

### Configure the environment

Create a local `.env` file in the project root. The `.env` file is excluded from version control.

Set the environment and the corresponding application URLs:

```env
TEST_ENV=qa
QA_BASE_URL=https://eventhub.rahulshettyacademy.com
STAGING_BASE_URL=
```

Use `TEST_ENV=qa` or `TEST_ENV=staging` to select the target environment. Provide the appropriate URL for the environment you intend to run.

## Running Tests

Run all discovered tests:

```bash
npx playwright test
```

Run the login tests in Chromium:

```bash
npx playwright test tests/authentication/login.spec.js --project=chromium
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Reports

Open the Playwright HTML report:

```bash
npx playwright show-report
```

Generate and open the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Development Approach

This is an actively developed learning project. New Page Objects and test scenarios are added incrementally. A Page Object is considered implemented when its functionality is added to the code; test coverage and runtime validation are tracked separately.

The immediate focus is to build out and execute the UI scenarios for authentication, events, and bookings before adding broader framework enhancements and CI integration.

---

**Project Status:** POM foundation and login automation implemented; broader UI test coverage is in progress.
