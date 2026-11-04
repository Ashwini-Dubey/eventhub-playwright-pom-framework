class EventsPage {
  constructor(page) {
    this.page = page;
    this.searchEventsVenueField = page.getByPlaceholder(
      "Search events, venues…",
    );
    this.eventCategoryDropdown = page.getByRole("combobox", {
      name: "All Categories",
    });
    this.eventCityDropdown = page.getByRole("combobox", { name: "All Cities" });
    this.clearFiltersButton = page.getByRole("button", {
      name: "Clear filters",
    });
    this.addNewEventButton = page.getByRole("button", {
      name: "Add New Event",
    });
    this.bookNowLink = page.getByRole("link", { name: "Book Now" });
  }

  async searchEventsVenue(eventName) {
    await this.searchEventsVenueField.fill(eventName);
  }

  async filterEventWithCategory(eventCategory) {
    await this.eventCategoryDropdown.selectOption(eventCategory);
  }

  async filterEventWithCity(eventCity) {
    await this.eventCityDropdown.selectOption(eventCity);
  }

  async clearFilters() {
    await this.clearFiltersButton.click();
  }

  async clickAddNewEventsButton() {
    await this.addNewEventButton.click();
  }

  async clickBookNowLink() {
    await this.bookNowLink.first().click();
  }
}

export { EventsPage };
