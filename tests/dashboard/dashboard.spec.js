import { test, expect } from "../../fixtures/testFixtures.js";

test("Dashboard Validation", async ({ authenticatedUser, dashboardPage }) => {
  await expect(dashboardPage.browseEventsLink).toBeVisible();
  await expect(dashboardPage.myBookingsButton).toBeVisible();
  await expect(dashboardPage.viewAllLink).toBeVisible();
  await expect(dashboardPage.exploreAllEventsButton).toBeVisible();
  await expect(dashboardPage.bookNowLink.first()).toBeVisible();
});

test("Dashboard - Browse Events Navigation", async ({
  authenticatedUser,
  dashboardPage,
  page,
}) => {
  await dashboardPage.clickBrowseEvents();
  await expect(page).toHaveURL(/\/events$/);
});

test("Dashboard - My Booking Navigation", async ({
  authenticatedUser,
  dashboardPage,
  page,
}) => {
  await dashboardPage.clickMyBookingsButton();
  await expect(page).toHaveURL(/\/bookings$/);
});

test("Dashboard - View All Navigation", async ({
  authenticatedUser,
  dashboardPage,
  page,
}) => {
  await dashboardPage.clickViewAllLink();
  await expect(page).toHaveURL(/\/events$/);
});

test("Dashboard - Explore All Events Navigation", async ({
  authenticatedUser,
  dashboardPage,
  page,
}) => {
  await dashboardPage.clickExploreAllEventsButton();
  await expect(page).toHaveURL(/\/events$/);
});

test("Dashboard - Booking Navigagation", async ({
  authenticatedUser,
  dashboardPage,
  page,
}) => {
  await dashboardPage.clickBookNowLink();
  await expect(page).toHaveURL(/\/events\/\d+$/);
});
