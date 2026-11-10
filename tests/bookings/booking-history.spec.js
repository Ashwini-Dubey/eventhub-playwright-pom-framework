import { test, expect } from "../../fixtures/testFixtures.js";

test("Booking Listing : Check & Validate Booking Details", async ({
  authenticatedUser,
  page,
  headersComponents,
  bookingListingPage,
  bookingDetailsPage,
}) => {
  await headersComponents.clickMyBookingsNavigation();
  await expect(page).toHaveURL(/\/bookings$/);
  console.log(
    "Booking Ref.: ",
    await bookingListingPage.bookingRefDetail.first().textContent(),
  );
  console.log(
    "Event Name: ",
    await bookingListingPage.eventNameDetail.first().textContent(),
  );
  await bookingListingPage.viewBookingDetailsButton.first().click();
  await expect(page).toHaveURL(/\/bookings\/\d+$/);
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
});
