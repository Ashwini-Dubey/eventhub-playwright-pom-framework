class HeadersComponents {
  constructor(page) {
    this.page = page;
    this.homeNavigation = page.getByTestId("nav-home");
    this.eventsNavigation = page.getByTestId("nav-events");
    this.myBookingsNavigation = page.getByTestId("nav-bookings");
    this.logoutButton = page.getByRole("button", { name: "Logout" });
  }

  async clickHomeNavigation() {
    await this.homeNavigation.click();
  }

  async clickEventsNavigation() {
    await this.eventsNavigation.click();
  }

  async clickMyBookingsNavigation() {
    await this.myBookingsNavigation.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}
export { HeadersComponents };
