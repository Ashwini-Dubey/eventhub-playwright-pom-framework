import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/events.json" with { type: "json" };
import { generateUniqueEventName } from "../../utils/dataGenerator.js";

test("Valid Event Creation", async ({
  authenticatedUser,
  dashboardPage,
  createEventPage,
  eventsPage,
  page,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.clickAddNewEventsButton();
  await expect(page).toHaveURL(/\/admin\/events$/);
  const eventName = generateUniqueEventName();
  await createEventPage.enterEventName(eventName);
  await createEventPage.enterEventDescription(
    userData.validEvent.eventDescription,
  );
  await createEventPage.selectEventCategory(userData.validEvent.eventCategory);
  await createEventPage.enterEventCity(userData.validEvent.eventCity);
  await createEventPage.enterEventVenue(userData.validEvent.eventVenue);
  await createEventPage.enterEventDateTime(userData.validEvent.eventDateTime);
  await createEventPage.enterEventPrice(userData.validEvent.eventPrice);
  await createEventPage.enterEventSeats(userData.validEvent.eventSeats);
  await createEventPage.clickAddButton();
  await expect(createEventPage.eventCreateSuccessMessage).toBeVisible();
});

test("Invalid Event Creation - Submission without data", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
  createEventPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.clickAddNewEventsButton();
  await createEventPage.clickAddButton();
  await expect(createEventPage.eventNameFieldError).toBeVisible();
  await expect(createEventPage.eventCityFieldError).toBeVisible();
  await expect(createEventPage.eventVenueFieldError).toBeVisible();
  await expect(createEventPage.eventDateTimeFieldError).toBeVisible();
  await expect(createEventPage.eventPriceFieldError).toBeVisible();
  await expect(createEventPage.eventSeatsFieldError).toBeVisible();
});
