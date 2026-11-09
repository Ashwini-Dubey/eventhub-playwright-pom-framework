
class EventsPage {
  constructor(page) {
    this.page = page;
    this.searchEventsVenueField = page.getByPlaceholder(
      "Search events, venues…",
    );
    this.eventCategoryDropdown = page.locator("select").nth(0);
    this.eventCityDropdown = page.locator("select").nth(1);
    this.clearFiltersButton = page.getByRole("button", {
      name: "Clear filters",
    });
    this.addNewEventButton = page.getByRole("button", {
      name: "Add New Event",
    });
    this.bookNowLink = page.getByRole("link", { name: "Book Now" });
    this.eventCard = page.getByTestId("event-card");
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

  async clickClearFilters() {
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
