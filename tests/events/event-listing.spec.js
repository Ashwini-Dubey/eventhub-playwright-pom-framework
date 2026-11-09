import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/events.json" with { type: "json" };

test("Event Listing Page Validation", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
  page,
}) => {
  await dashboardPage.clickBrowseEvents();
  await expect(page).toHaveURL(/\/events$/);
  await expect(eventsPage.searchEventsVenueField).toBeVisible();
  await expect(eventsPage.eventCategoryDropdown).toBeVisible();
  await expect(eventsPage.eventCityDropdown).toBeVisible();
  await expect(eventsPage.addNewEventButton).toBeVisible();
  await expect(eventsPage.bookNowLink.first()).toBeVisible();
});

test("Events Page - Filter by Category & Clear Filter", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.filterEventWithCategory(userData.filterEvent.eventCategory);
  await expect(eventsPage.eventCategoryDropdown).toHaveValue(
    userData.filterEvent.eventCategory,
  );
  await expect(eventsPage.clearFiltersButton).toBeVisible();
  await eventsPage.clickClearFilters();
  await expect(eventsPage.eventCategoryDropdown).toHaveValue("");
  await expect(eventsPage.clearFiltersButton).toBeHidden();
});

test("Events Page - Filter by City & Clear Filter", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.filterEventWithCity(userData.filterEvent.eventCity);
  await expect(eventsPage.eventCityDropdown).toHaveValue(
    userData.filterEvent.eventCity,
  );
  await expect(eventsPage.clearFiltersButton).toBeVisible();
  await eventsPage.clickClearFilters();
  await expect(eventsPage.eventCityDropdown).toHaveValue("");
  await expect(eventsPage.clearFiltersButton).toBeHidden();
});

test("Events Page - Filter by Category + City & Clear Filter", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.filterEventWithCategory(userData.filterEvent.eventCategory);
  await expect(eventsPage.eventCategoryDropdown).toHaveValue(
    userData.filterEvent.eventCategory,
  );
  await eventsPage.filterEventWithCity(userData.filterEvent.eventCity);
  await expect(eventsPage.eventCityDropdown).toHaveValue(
    userData.filterEvent.eventCity,
  );
  await expect(eventsPage.eventCategoryDropdown).toHaveValue(
    userData.filterEvent.eventCategory,
  );
  await expect(eventsPage.clearFiltersButton).toBeVisible();
  await eventsPage.clickClearFilters();
  await expect(eventsPage.eventCityDropdown).toHaveValue("");
  await expect(eventsPage.eventCategoryDropdown).toHaveValue("");
  await expect(eventsPage.clearFiltersButton).toBeHidden();
});
