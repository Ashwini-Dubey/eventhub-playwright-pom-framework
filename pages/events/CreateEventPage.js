class CreateEventPage {
  constructor(page) {
    this.page = page;
    this.eventNameField = page.getByTestId("event-title-input");
    this.eventDescriptionField = page.getByPlaceholder("Describe the event…"); //Text Area Tag
    this.eventCategoryDropdown = page.locator("#category"); //Select Tag
    this.eventCityField = page.getByLabel("City");
    this.eventVenueField = page.getByLabel("Venue");
    this.eventDateTimeField = page.getByRole("textbox", {
      name: "Event Date & Time*",
    });
    this.eventPriceField = page.getByLabel("Price ($)");
    this.eventSeatsField = page.getByLabel("Total Seats");
    this.addEventButton = page.getByRole("button", { name: "+ Add Event" });
    this.eventNameFieldError = page.getByText("Title is required");
    this.eventCityFieldError = page.getByText("City is required");
    this.eventVenueFieldError = page.getByText("Venue is required");
    this.eventDateTimeFieldError = page.getByText("Event date is required");
    this.eventPriceFieldError = page.getByText("Enter a valid price (≥ 0)");
    this.eventSeatsFieldError = page.getByText("Must have at least 1 seat");
    this.eventCreateSuccessMessage = page.getByText("Event Created!");
  }

  async enterEventName(eventName) {
    await this.eventNameField.fill(eventName);
  }

  async enterEventDescription(eventDescription) {
    await this.eventDescriptionField.fill(eventDescription);
  }

  async selectEventCategory(eventCategory) {
    await this.eventCategoryDropdown.selectOption(eventCategory);
  }

  async enterEventCity(eventCity) {
    await this.eventCityField.fill(eventCity);
  }

  async enterEventVenue(eventVenue) {
    await this.eventVenueField.fill(eventVenue);
  }

  async enterEventDateTime(eventDateTime) {
    await this.eventDateTimeField.fill(eventDateTime);
  }

  async enterEventPrice(eventPrice) {
    await this.eventPriceField.fill(eventPrice);
  }

  async enterEventSeats(eventSeats) {
    await this.eventSeatsField.fill(eventSeats);
  }

  async clickAddButton() {
    await this.addEventButton.click();
  }

  async addEvent(
    eventName,
    eventDescription,
    eventCategory,
    eventCity,
    eventVenue,
    eventDateTime,
    eventPrice,
    eventSeats,
  ) {
    await this.enterEventName(eventName);
    await this.enterEventDescription(eventDescription);
    await this.selectEventCategory(eventCategory);
    await this.enterEventCity(eventCity);
    await this.enterEventVenue(eventVenue);
    await this.enterEventDateTime(eventDateTime);
    await this.enterEventPrice(eventPrice);
    await this.enterEventSeats(eventSeats);
    await this.clickAddButton();
  }
}

export { CreateEventPage };
