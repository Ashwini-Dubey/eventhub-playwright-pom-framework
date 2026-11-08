import { test, expect } from "../../fixtures/testFixtures.js";

test("Dashboard Validation", async ({ authenticatedUser, dashboardPage }) => {
  await expect(dashboardPage.myBookingsButton).toBeVisible();
  await expect(dashboardPage.viewAllLink).toBeVisible();
  await expect(dashboardPage.exploreAllEventsButton).toBeVisible();
  await expect(dashboardPage.bookNowLink.first()).toBeVisible();
});
