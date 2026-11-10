import { expect } from "@playwright/test";

class EventDetailsPage {
  constructor(
    page,
    eventCategory,
    eventDescription,
    eventVenue,
    eventCity,
    eventPrice,
  ) {
    this.page = page;
    this.eventNameDetail = page.locator("h1");
    this.eventCategoryDetail = page.locator("div").locator(".text-blue-700");
    this.eventDescriptionDetail = page
      .getByRole("heading", { name: "About this event" })
      .locator("..")
      .locator("p");
    this.eventDateDetail = page
      .getByText("Date")
      .locator("..")
      .locator("p")
      .nth(1);
    this.eventTimeDetail = page
      .getByText("Time")
      .locator("..")
      .locator("p")
      .nth(1);
    this.eventVenueDetail = page
      .getByText("Venue")
      .locator("..")
      .locator("p")
      .nth(1);
    this.eventCityDetail = page
      .getByText("City")
      .locator("..")
      .locator("p")
      .nth(1);
    this.eventPriceDetail = page
      .getByText("Price")
      .locator("..")
      .locator("p")
      .nth(1);
    this.eventSeatAvailableDetail = page.locator("div p span");
    this.eventTicketCountIncrement = page.getByRole("button", { name: "+" });
    this.eventTicketCountDecrement = page.getByRole("button", { name: "-" });
    this.bookingTicketCount = page.locator("#ticket-count");
    this.bookingFullNameField = page.getByLabel("Full Name");
    this.bookingEmailField = page.getByTestId("customer-email");
    this.bookingPhoneNumberField = page.getByLabel("Phone Number");
    this.confirmBookingButton = page.getByRole("button", {
      name: "Confirm Booking",
    });
    this.bookingConfirmationSuccess = page.getByText("Booking Confirmed! 🎉");
    this.bookingRefDetail = page.locator(".booking-ref");
    this.viewMyBookingsButton = page.getByRole("button", {
      name: "View My Bookings",
    });
    this.browseMoreEventsButton = page.getByRole("button", {
      name: "Browse More Events",
    });
  }

  async getEventDetails() {
    const extractedEventName = await this.eventNameDetail.textContent();
    const extractedEventCategory = await this.eventCategoryDetail.textContent();
    const extractedEventDescription =
      await this.eventDescriptionDetail.textContent();
    const extractedEventDate = await this.eventDateDetail.textContent();
    const extractedEventTime = await this.eventTimeDetail.textContent();
    const extractedEventVenue = await this.eventVenueDetail.textContent();
    const extractedEventCity = await this.eventCityDetail.textContent();
    const extractedEventPrice = await this.eventPriceDetail.textContent();
    const extractedEventSeatsAvailability =
      await this.eventSeatAvailableDetail.textContent();

    return {
      extractedEventName,
      extractedEventCategory,
      extractedEventDescription,
      extractedEventDate,
      extractedEventTime,
      extractedEventPrice,
      extractedEventVenue,
      extractedEventCity,
      extractedEventSeatsAvailability,
    };
  }

  async enterBookingFullName(bookingName) {
    await this.bookingFullNameField.fill(bookingName);
  }

  async enterBookingEmail(bookingEmail) {
    await this.bookingEmailField.fill(bookingEmail);
  }

  async enterBookingPhoneNumber(bookingPhoneNumber) {
    await this.bookingPhoneNumberField.fill(bookingPhoneNumber);
  }

  async incrementTicketCount() {
    await this.eventTicketCountIncrement.click();
  }

  async extractBookingTicketCount() {
    return await this.bookingTicketCount.textContent();
  }

  async decrementTicketCount() {
    await this.eventTicketCountDecrement.click();
  }

  async clickConfirmBooking() {
    await this.confirmBookingButton.click();
  }

  async checkBookingConfirmation() {
    await expect(this.bookingConfirmationSuccess).toBeVisible();
  }

  async getBookingRef() {
    return await this.bookingRefDetail.textContent();
  }

  async clickViewMyBookings() {
    await this.viewMyBookingsButton.click();
  }

  async clickBrowseMoreEvents() {
    await this.browseMoreEventsButton.click();
  }

  async eventBooking(bookingName, bookingEmail, bookingPhoneNumber) {
    await this.enterBookingFullName(bookingName);
    await this.enterBookingEmail(bookingEmail);
    await this.enterBookingPhoneNumber(bookingPhoneNumber);
    await this.incrementTicketCount();
    await this.decrementTicketCount();
    await this.clickConfirmBooking();
  }
}

export { EventDetailsPage };
