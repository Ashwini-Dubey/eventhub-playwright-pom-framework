import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/events.json" with { type: "json" };

test("Event Search - Search by Event Name", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.searchEventByName(userData.filterEvent.eventName);
  await expect(eventsPage.eventCard.first()).toContainText(
    userData.filterEvent.eventName,
  );
});

test("Event Search - Search by Event Venue", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.searchEventByVenue(userData.filterEvent.eventVenue);
  await expect(eventsPage.eventCard.first()).toContainText(
    userData.filterEvent.eventVenue,
  );
});
