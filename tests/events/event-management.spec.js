import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/events.json" with { type: "json" };
import { generateUniqueEventName } from "../../utils/dataGenerator.js";

test("Event Creation", async ({
  authenticatedUser,
  dashboardPage,
  createEventPage,
  eventsPage,
  page,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.clickAddNewEventsButton();
  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/admin/events",
  );
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
});
