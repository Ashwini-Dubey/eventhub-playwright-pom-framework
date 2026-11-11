import { test, expect } from "../../fixtures/testFixtures.js";
import bookingData from "../../test-data/bookings.json" with { type: "json" };
import eventData from "../../test-data/events.json" with { type: "json" };
import userData from "../../test-data/users.json" with { type: "json" };

test("Valid Event Booking with 1 Ticket & & Navigation Controls", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
  page,
  eventDetailsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.searchEventByName(eventData.filterEvent.eventName);
  await expect(eventsPage.eventCard.first()).toContainText(
    eventData.filterEvent.eventName,
  );
  await eventsPage.clickBookNowLink();
  await expect(page).toHaveURL(/\/events\/\d+$/);
  await eventDetailsPage.eventBooking(
    bookingData.validEventBooking.bookingName,
    userData.validUserLogin.email,
    bookingData.validEventBooking.bookingPhoneNumber,
  );
  await eventDetailsPage.checkBookingConfirmation();
  await expect(eventDetailsPage.viewMyBookingsButton).toBeVisible();
  await expect(eventDetailsPage.browseMoreEventsButton).toBeVisible();
  await eventDetailsPage.clickViewMyBookings();
  await expect(page).toHaveURL(/\/bookings$/);
});

test("Valid Event booking with multiple ticket & Navigation Controls", async ({
  authenticatedUser,
  dashboardPage,
  eventsPage,
  page,
  eventDetailsPage,
}) => {
  await dashboardPage.clickBrowseEvents();
  await eventsPage.searchEventByName(eventData.filterEvent.eventName);
  await expect(eventsPage.eventCard.first()).toContainText(
    eventData.filterEvent.eventName,
  );
  await eventsPage.clickBookNowLink();
  await expect(page).toHaveURL(/\/events\/\d+$/);
  await eventDetailsPage.enterBookingFullName(
    bookingData.validEventBooking.bookingName,
  );
  await eventDetailsPage.enterBookingEmail(userData.validUserLogin.email);
  await eventDetailsPage.enterBookingPhoneNumber(
    bookingData.validEventBooking.bookingPhoneNumber,
  );
  expect(await eventDetailsPage.extractBookingTicketCount()).toBe("1");
  await eventDetailsPage.incrementTicketCount();
  await eventDetailsPage.incrementTicketCount();
  await eventDetailsPage.incrementTicketCount();
  expect(await eventDetailsPage.extractBookingTicketCount()).toBe("4");
  await eventDetailsPage.clickConfirmBooking();
  await eventDetailsPage.checkBookingConfirmation();
  await expect(eventDetailsPage.viewMyBookingsButton).toBeVisible();
  await expect(eventDetailsPage.browseMoreEventsButton).toBeVisible();
  await eventDetailsPage.clickBrowseMoreEvents();
  await expect(page).toHaveURL(/\/events$/);
});
