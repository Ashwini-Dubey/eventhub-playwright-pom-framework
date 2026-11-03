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

  // Fail if test.only is accidentally committed in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 1 : 0,

  // Number of parallel workers
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
  ],

  // Shared settings for all tests
  use: {
    baseURL: environment.baseURL,

    // Capture trace when a test fails on retry
    trace: "on-first-retry",

    // Capture screenshot only when a test fails
    screenshot: "only-on-failure",

    // Record video only when a test fails
    video: "retain-on-failure",
  },

  // Browser configuration
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
