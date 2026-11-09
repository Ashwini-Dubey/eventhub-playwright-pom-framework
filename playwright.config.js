/**
 * Playwright Configuration
 *
 * Central configuration for the EventHub UI Automation Framework.
 */

import { defineConfig, devices } from "@playwright/test";
import environment from "./config/environment.js";

export default defineConfig({
  // Directory containing all test files
  testDir: "./tests",

  // Run independent tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 1,

  // Configure parallel workers
  workers: process.env.CI ? 2 : undefined,

  // Test execution timeout
  timeout: 30 * 1000,

  // Assertion timeout
  expect: {
    timeout: 5 * 1000,
  },

  // Reporting configuration
  reporter: [
    ["list"],
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: "never",
      },
    ],
    [
      "allure-playwright",
      {
        resultsDir: "allure-results",
      },
    ],
  ],

  // Shared settings for all browser projects
  use: {
    baseURL: environment.baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  // Cross-browser execution
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
