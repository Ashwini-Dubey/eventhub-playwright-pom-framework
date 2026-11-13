# EventHub Playwright POM Framework

A UI test automation framework for the [EventHub application](https://eventhub.rahulshettyacademy.com), built with **Playwright Test, JavaScript (ES Modules), and the Page Object Model (POM)**.

The project is developed incrementally with a focus on readable tests, reusable page objects, maintainable fixtures, cross-browser execution, and CI reporting.

## Project Overview

| Area                   | Details                                     |
| ---------------------- | ------------------------------------------- |
| Application under test | EventHub                                    |
| Automation tool        | Playwright Test                             |
| Language               | JavaScript (ES Modules)                     |
| Design pattern         | Page Object Model (POM)                     |
| Browsers               | Chromium, Firefox, WebKit                   |
| Test organization      | Authentication, Dashboard, Events, Bookings |
| Test data              | JSON files                                  |
| Shared setup           | Custom Playwright fixtures                  |
| Reporting              | Playwright HTML, Allure                     |
| CI                     | GitHub Actions                              |

**Scope:** This repository currently covers UI automation using POM. API automation and BDD/Gherkin are outside the scope of this project.

## Current Test Coverage

The test suite is organized around the main EventHub user journeys:

| Area             | Scenarios represented in the test suite                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Authentication   | Valid and invalid login; successful signup; signup field validation and already-registered email validation |
| Dashboard        | Dashboard navigation and visible page elements                                                              |
| Event listing    | Event listing, search, and filtering                                                                        |
| Event management | Event creation and event details validation                                                                 |
| Bookings         | Single-ticket and multiple-ticket booking, booking history/details, and booking cancellation                |

The scenarios above describe the current test organization. Individual assertions and coverage may continue to evolve as the framework is refined.

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── components/
│   ├── Header.js
│   ├── Modal.js
│   ├── NavigationMenu.js
│   └── SearchBar.js
├── config/
│   ├── environment.js
│   └── environments/
│       ├── qa.js
│       └── staging.js
├── fixtures/
│   └── testFixtures.js
├── global-setup/
│   └── globalSetup.js
├── pages/
│   ├── authentication/
│   │   ├── LoginPage.js
│   │   └── SignupPage.js
│   ├── bookings/
│   │   ├── BookingDetailsPage.js
│   │   └── BookingListingPage.js
│   ├── dashboard/
│   │   └── DashboardPage.js
│   └── events/
│       ├── CreateEventPage.js
│       ├── EventDetailsPage.js
│       └── EventsPage.js
├── test-data/
│   ├── bookings.json
│   ├── events.json
│   └── users.json
├── tests/
│   ├── authentication/
│   │   ├── login.spec.js
│   │   └── signup.spec.js
│   ├── bookings/
│   │   ├── booking-history.spec.js
│   │   ├── booking.spec.js
│   │   └── cancellation.spec.js
│   ├── dashboard/
│   │   └── dashboard.spec.js
│   └── events/
│       ├── event-listing.spec.js
│       ├── event-management.spec.js
│       └── event-search.spec.js
├── utils/
│   └── dataGenerator.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Framework Design

The framework uses a straightforward POM approach:

- **Tests (`tests/`):** Define user journeys and business-level expectations.
- **Page Objects (`pages/`):** Keep page-specific locators and actions together.
- **Reusable components (`components/`):** Encapsulate shared UI elements used across pages.
- **Fixtures (`fixtures/testFixtures.js`):** Extend Playwright's test object and provide Page Object instances. The `authenticatedUser` fixture performs the login setup for tests that require an authenticated session.
- **Test data (`test-data/`):** Store reusable event, booking, and user test data in JSON files.
- **Utilities (`utils/`):** Hold reusable helper functions such as unique test-data generation.
- **Configuration (`config/` and `playwright.config.js`):** Select the target environment and configure browser projects, timeouts, retries, tracing, screenshots, videos, and reporters.

Tests import `test` and `expect` from the custom fixture module:

```js
import { test, expect } from "../../fixtures/testFixtures.js";
```

## Getting Started

### Prerequisites

- Node.js 22 (the version used by the GitHub Actions workflow)
- npm

### Install dependencies

Clone the repository, switch to the `dev` branch if needed, and install the locked dependencies:

```bash
git clone https://github.com/Ashwini-Dubey/eventhub-playwright-pom-framework.git
cd eventhub-playwright-pom-framework
git checkout dev
npm ci
```

Install the Playwright browsers:

```bash
npx playwright install
```

On Linux machines that need Playwright's system packages, install the browser dependencies as well:

```bash
npx playwright install-deps
```

### Select the target environment

The environment manager reads `TEST_ENV` from the process environment or a local `.env` file. If it is not set, the framework defaults to `qa`.

Create a local `.env` file in the project root if you want to select the environment without setting the variable in every command:

```env
TEST_ENV=qa
```

Available values are:

- `qa`
- `staging`

The application URLs are currently defined in:

- `config/environments/qa.js`
- `config/environments/staging.js`

Update the relevant configuration file when the URL for an environment changes. The QA and Staging configuration files currently point to the same EventHub URL; set the Staging URL to the appropriate endpoint when one is available.

The local `.env` file is ignored by Git. Do not commit passwords, access tokens, or other real credentials. The current tests read user test data from `test-data/users.json`; use only disposable, non-sensitive test-account data in tracked files. Store any real credentials in environment variables or your CI secret store.

## Running Tests

Run the complete test suite across all configured browser projects:

```bash
npx playwright test
```

Run the suite in one browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run an individual spec:

```bash
npx playwright test tests/authentication/login.spec.js
npx playwright test tests/bookings/booking.spec.js
```

Run tests with the browser UI visible:

```bash
npx playwright test --headed
```

Run a test in Playwright's debug mode:

```bash
npx playwright test --debug
```

Select Staging for a single run:

```bash
TEST_ENV=staging npx playwright test
```

On Windows PowerShell, set the variable before running the command:

```powershell
$env:TEST_ENV="staging"
npx playwright test
```

## Reports and Debugging

### Playwright HTML report

The HTML report is generated in `playwright-report/`:

```bash
npx playwright show-report
```

### Allure report

After a test run, generate and open the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

The Playwright configuration also collects:

- **Trace:** on the first retry
- **Screenshots:** only for failed tests
- **Video:** retained for failed tests

These artifacts help investigate failures locally and in CI.

## Continuous Integration

GitHub Actions is configured in `.github/workflows/playwright.yml`.

The workflow runs on:

- Pushes to `main`, `master`, or `dev`
- Pull requests targeting `main`, `master`, or `dev`
- Manual execution through `workflow_dispatch`

The workflow uses Node.js 22, installs dependencies with `npm ci`, installs Playwright browsers and Linux dependencies, and executes the tests across the configured browser projects.

The workflow uploads the following artifacts even when the test step fails:

- `playwright-report/`
- `test-results/`
- `allure-results/`

The artifact is named `playwright-test-reports` and is retained for 30 days. Download it from the relevant GitHub Actions run to inspect the reports and failure evidence.

## Development Notes

- Keep test scenarios focused on user-visible behavior and meaningful assertions.
- Prefer accessible Playwright locators such as roles, labels, and placeholders where practical.
- Avoid fixed sleeps; wait for an expected UI state or condition.
- Keep page-specific interactions in Page Objects and business-level assertions in the tests.
- Add abstractions when they provide genuine reuse rather than introducing layers prematurely.

This is an actively evolving learning project. The goal is to keep the framework practical and maintainable while building confidence with Playwright and real-world UI automation patterns.
