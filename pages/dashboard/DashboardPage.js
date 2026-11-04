class DashboardPage {
  constructor(page) {
    this.page = page;
    this.browseEventsLink = page.getByRole("link", { name: "Browse Events →" });
    this.myBookingsButton = page.getByRole("button", { name: "My Bookings" });
    this.viewAllLink = page.getByRole("link", { name: "View all →" });
    this.exploreAllEventsButton = page.getByRole("button", {
      name: "Explore All Events",
    });
    this.bookNowLink = page.getByRole("link", { name: "Book Now" });
  }

  async clickBrowseEvents() {
    await this.browseEventsLink.click();
  }

  async clickMyBookingsButton() {
    await this.myBookingsButton.click();
  }

  async clickViewAllLink() {
    await this.viewAllLink.click();
  }

  async clickExploreAllEventsButton() {
    await this.exploreAllEventsButton.click();
  }

  async clickBookNowLink() {
    await this.bookNowLink.first().click();
  }
}

export { DashboardPage };
