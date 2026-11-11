import { test as base, expect } from "@playwright/test";
import { SignupPage } from "../pages/authentication/SignupPage.js";
import { LoginPage } from "../pages/authentication/LoginPage.js";
import { BookingDetailsPage } from "../pages/bookings/BookingDetailsPage.js";
import { BookingListingPage } from "../pages/bookings/BookingListingPage.js";
import { DashboardPage } from "../pages/dashboard/DashboardPage.js";
import { CreateEventPage } from "../pages/events/CreateEventPage.js";
import { EventDetailsPage } from "../pages/events/EventDetailsPage.js";
import { EventsPage } from "../pages/events/EventsPage.js";
import { HeadersComponents } from "../components/Header.js";
import eventData from "../test-data/events.json" with { type: "json" };
import userData from "../test-data/users.json" with { type: "json" };

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },
  bookingDetailsPage: async ({ page }, use) => {
    const bookingDetailsPage = new BookingDetailsPage(page);
    await use(bookingDetailsPage);
  },
  bookingListingPage: async ({ page }, use) => {
    const bookingListingPage = new BookingListingPage(page);
    await use(bookingListingPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  createEventPage: async ({ page }, use) => {
    const createEventPage = new CreateEventPage(page);
    await use(createEventPage);
  },
  eventDetailsPage: async ({ page }, use) => {
    const eventDetailsPage = new EventDetailsPage(page);
    await use(eventDetailsPage);
  },
  eventsPage: async ({ page }, use) => {
    const eventsPage = new EventsPage(page);
    await use(eventsPage);
  },

  headersComponents: async ({ page }, use) => {
    const headersComponents = new HeadersComponents(page);
    await use(headersComponents);
  },

  // Fixture for User Authentication
  authenticatedUser: async ({ loginPage, dashboardPage }, use) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(
      userData.validUserLogin.email,
      userData.validUserLogin.password,
    );
    await expect(dashboardPage.browseEventsLink).toBeVisible();
    await use();
  },
});

export { test, expect };
