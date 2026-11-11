import { test, expect } from "../../fixtures/testFixtures.js";
import eventData from "../../test-data/events.json" with { type: "json" };
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
  console.log(
    "Booking Details: ",
    await bookingDetailsPage.getBookingDetails(),
  );
  console.log(
    "Customer Details: ",
    await bookingDetailsPage.getCustomerDetails(),
  );
  console.log(
    "Payment Summary: ",
    await bookingDetailsPage.getPaymentSummaryDetails(),
  );
  console.log(
    "Booking Information: ",
    await bookingDetailsPage.getBookingInformation(),
  );
  await bookingDetailsPage.refundEligibilityCheck();
  console.log(
    "Refund Message: ",
    await bookingDetailsPage.extractRefundEligibilityMessage(),
  );

  await expect(bookingDetailsPage.customerName).toHaveText(
    bookingData.validEventBooking.bookingName,
  );
  await expect(bookingDetailsPage.customerPhone).toHaveText(
    bookingData.validEventBooking.bookingPhoneNumber,
  );

  
});
