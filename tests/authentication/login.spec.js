import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/users.json" with { type: "json" };

test("Valid User Login", async ({ loginPage, dashboardPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login(
    userData.validUserLogin.email,
    userData.validUserLogin.password,
  );
  await expect(dashboardPage.browseEventsLink).toBeVisible();
});

test("Invalid User Login", async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login(
    userData.invalidUserLogin.email,
    userData.invalidUserLogin.password,
  );
  await expect(loginPage.loginErrorMessage).toBeVisible();
  const loginErrorMessageText = await loginPage.extractLoginErrorMessage();
  await expect(loginErrorMessageText).toMatch(/^Invalid email or password$/);
});
