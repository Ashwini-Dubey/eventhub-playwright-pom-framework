import { expect } from "@playwright/test";

class BookingDetailsPage {
  constructor(page) {
    this.page = page;

    //Event Details
    this.bookingRefDetail = page.locator("span.text-indigo-600");
    this.bookingEventName = page.locator("div h1");
    this.bookingStatus = page.locator("span.text-emerald-700");
    this.bookingEventCategory = page
      .locator("span")
      .filter({ hasText: /^Category$/ })
      .locator("..")
      .locator("span.text-gray-900");
    this.bookingEventDate = page
      .locator("span")
      .filter({ hasText: /^Date$/ })
      .locator("..")
      .locator("span.text-gray-900");
    this.bookingEventVenue = page
      .locator("span")
      .filter({ hasText: /^Venue$/ })
      .locator("..")
      .locator("span.text-gray-900");
    this.bookingEventCity = page
      .locator("span")
      .filter({ hasText: /^City$/ })
      .locator("..")
      .locator("span.text-gray-900");

    //Customer Details
    this.customerName = page
      .locator("span")
      .filter({ hasText: /^Name$/ })
      .locator("..")
      .locator("span.text-gray-900");
    this.customerEmail = page
      .locator("span")
      .filter({ hasText: /^Email$/ })
      .locator("..")
      .locator("span.text-gray-900");
    this.customerPhone = page
      .locator("span")
      .filter({ hasText: /^Phone$/ })
      .locator("..")
      .locator("span.text-gray-900");

    //Payment Summary
    this.ticketsCount = page
      .locator("span")
      .filter({ hasText: /^Tickets$/ })
      .locator("..")
      .locator("span.text-gray-900");

    this.pricePerTicket = page
      .locator("span")
      .filter({ hasText: /^Price per ticket$/ })
      .locator("..")
      .locator("span.text-gray-900");

    this.totalPaid = page
      .locator("span")
      .filter({ hasText: /^Total Paid$/ })
      .locator("..")
      .locator("span.text-indigo-700");

    //Cancel Booking
    this.cancelBookingButton = page.getByRole("button", {
      name: "Cancel Booking",
    });
    this.bookingCancelPromptDeclineButton = page.getByRole("button", {
      name: "Cancel",
    });
    this.bookingCancelPromptApprovalButton = page.getByRole("button", {
      name: "Yes, cancel it",
    });
    this.bookingCancelPromptCloseButton = page.getByRole("button", {
      name: "X",
    });

    //Back to Bookings
    this.backToMyBookingsButton = page.getByRole("button", {
      name: "← Back to My Bookings",
    });

    //Refund Check
    this.checkForRefundEligibility = page.getByRole("button", {
      name: "Check eligibility for refund?",
    });
    this.refundEligibilityMessage = page.getByTestId("refund-result");
    this.bookingCancellationSuccessMessage = page.getByText(
      "Booking cancelled successfully",
    );

    //Booking Information
    this.bookedOn = page
      .locator("span")
      .filter({ hasText: /^Booked on$/ })
      .locator("..")
      .locator("span.text-gray-900");

    this.bookingId = page
      .locator("span")
      .filter({ hasText: /^Booking ID$/ })
      .locator("..")
      .locator("span.text-gray-900");
  }

  async getBookingDetails() {
    const extractedBookingRef = await this.bookingRefDetail.textContent();
    const extractedBookingEventName = await this.bookingEventName.textContent();
    const extractedBookingStatus = await this.bookingStatus.textContent();
    const extractedBookingEventCategory =
      await this.bookingEventCategory.textContent();
    const extractedBookingEventDate = await this.bookingEventDate.textContent();
    const extractedBookingEventVenue =
      await this.bookingEventVenue.textContent();
    const extractedBookingEventCity = await this.bookingEventCity.textContent();

    return {
      extractedBookingRef,
      extractedBookingEventName,
      extractedBookingStatus,
      extractedBookingEventCategory,
      extractedBookingEventDate,
      extractedBookingEventVenue,
      extractedBookingEventCity,
    };
  }

  async getCustomerDetails() {
    const extractedCustomerName = await this.customerName.textContent();
    const extractedCustomerEmail = await this.customerEmail.textContent();
    const extractedCustomerPhone = await this.customerPhone.textContent();

    return {
      extractedCustomerName,
      extractedCustomerEmail,
      extractedCustomerPhone,
    };
  }

  async getPaymentSummaryDetails() {
    const extractedTicketsCount = await this.ticketsCount.textContent();
    const extractedPricePerTicket = await this.pricePerTicket.textContent();
    const extractedTotalPaid = await this.totalPaid.textContent();

    return {
      extractedTicketsCount,
      extractedPricePerTicket,
      extractedTotalPaid,
    };
  }

  async getBookingInformation() {
    const extractedBookedOn = await this.bookedOn.textContent();
    const extractedBookingId = await this.bookingId.textContent();

    return {
      extractedBookedOn,
      extractedBookingId,
    };
  }
  async clickCancelBooking() {
    await this.cancelBookingButton.click();
  }

  async cancelBookingPromptReject() {
    await this.bookingCancelPromptDeclineButton.click();
  }

  async cancelBookingPromptClose() {
    await this.bookingCancelPromptCloseButton.click();
  }

  async cancelBookingPromptApproval() {
    await this.bookingCancelPromptApprovalButton.click();
  }

  async cancelBooking() {
    await this.clickCancelBooking();
    await this.cancelBookingPromptApproval();
    await expect(this.bookingCancellationSuccessMessage).toBeVisible();
  }

  async clickRefundEligibilityCheck() {
    await this.checkForRefundEligibility.click();
  }

  async extractRefundEligibilityMessage() {
    return await this.refundEligibilityMessage.textContent();
  }

  async refundEligibilityCheck() {
    await this.clickRefundEligibilityCheck();
    await expect(this.refundEligibilityMessage).toBeVisible();
  }

  async clickBackToMyBookings() {
    await this.backToMyBookingsButton.click();
  }
}

export { BookingDetailsPage };
