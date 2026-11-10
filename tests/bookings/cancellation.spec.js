import { test, expect } from "../../fixtures/testFixtures.js";

test("Booking Listing : Booking Cancellation", async ({
  authenticatedUser,
  page,
  headersComponents,
  bookingListingPage,
}) => {
  await headersComponents.clickMyBookingsNavigation();
  await expect(page).toHaveURL(/\/bookings$/);
  await bookingListingPage.cancelBooking;
});
