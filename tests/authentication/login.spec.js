import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/users.json" with { type: "json" };

test("Valid User Login", async ({ loginPage, dashboardPage }) => {
  //Tests
  await loginPage.navigateToLoginPage();
  await loginPage.login(userData.validUser.email, userData.validUser.password);
  await expect(dashboardPage.browseEventsLink).toBeVisible();
});

/*
test("Invalid User Login", async ({ loginPage, dashboardPage }) => {
  //Tests
  await loginPage.navigateToLoginPage();
  await loginPage.login(
    userData.invalidUser.email,
    userData.invalidUser.password,
  );
  await expect(dashboardPage.browseEventsLink).toBeVisible();
});

test("New User Login", async ({ loginPage, dashboardPage }) => {
  //Tests
  await loginPage.navigateToLoginPage();
  await loginPage.login(userData.newUser.email, userData.newUser.password);
  await expect(dashboardPage.browseEventsLink).toBeVisible();
});
*/
