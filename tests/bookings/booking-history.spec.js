import { test, expect } from "../../fixtures/testFixtures.js";
import bookingData from "../../test-data/bookings.json" with { type: "json" };

test("Booking Listing : Check & Validate Booking Details", async ({
  authenticatedUser,
  page,
  headersComponents,
  bookingListingPage,
  bookingDetailsPage,
}) => {
  await headersComponents.clickMyBookingsNavigation();
  await expect(page).toHaveURL(/\/bookings$/);
  const bookingRefListing =
    await bookingListingPage.bookingRefListing.textContent();
  const eventNameListing =
    await bookingListingPage.eventNameDetail.textContent();
  await bookingListingPage.viewBookingDetailsButton.first().click();
  await expect(page).toHaveURL(/\/bookings\/\d+$/);
  const bookingRefDetail =
    await bookingDetailsPage.bookingRefDetail.textContent();
  const eventNameDetail =
    await bookingDetailsPage.bookingEventName.textContent();
  await expect(bookingRefListing).toBe(bookingRefDetail);
  await expect(eventNameListing).toBe(eventNameDetail);
  await expect(bookingDetailsPage.bookingStatus).toHaveText("confirmed");

  await bookingDetailsPage.refundEligibilityCheck();

  await expect(bookingDetailsPage.customerName).toHaveText(
    bookingData.validEventBooking.bookingName,
  );
  await expect(bookingDetailsPage.customerPhone).toHaveText(
    bookingData.validEventBooking.bookingPhoneNumber,
  );
});
