import { expect } from "@playwright/test";

class BookingListingPage {
  constructor(page) {
    this.page = page;
    this.viewBookingDetailsButton = page.getByRole("button", {
      name: "View Details",
    });
    this.cancelBookingButton = page.getByRole("button", {
      name: "Cancel Booking",
    });
    this.clearAllBookingsButton = page.getByRole("button", {
      name: "Clear all bookings",
    });
    this.bookingRefDetail = page.locator(".booking-ref");

    this.eventNameDetail = page.locator("div div h3");

    this.bookingCancelPromptDeclineButton = page.getByRole("button", {
      name: "Cancel",
    });

    this.bookingCancelPromptApprovalButton = page.getByRole("button", {
      name: "Yes, cancel it",
    });

    this.bookingCancelPromptCloseButton = page.getByRole("button", {
      name: "X",
    });

    this.bookingCancellationSuccessMessage = page.getByText(
      "Booking cancelled successfully",
    );
  }

  async clickViewBookingDetails() {
    await this.viewBookingDetailsButton.click();
  }

  async clickCancelBooking() {
    await this.cancelBookingButton.click();
  }

  async clickClearAllBookings() {
    await this.clearAllBookingsButton.click();
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
    await this.cancelBookingPromptClose();
    await this.clickCancelBooking();
    await this.cancelBookingPromptReject();
    await this.clickCancelBooking();
    await this.cancelBookingPromptApproval();
    await expect(this.bookingCancellationSuccessMessage).toBeVisible();
  }
}

export { BookingListingPage };
