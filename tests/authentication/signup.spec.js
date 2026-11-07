import { test, expect } from "../../fixtures/testFixtures.js";
import userData from "../../test-data/users.json" with { type: "json" };
import { generateUniqueEmail } from "../../utils/dataGenerator.js";

test("New User Sign Up", async ({ signupPage, dashboardPage }) => {
  const email = generateUniqueEmail();
  await signupPage.navigateToSignupPage();
  await signupPage.signup(email, userData.newUserSignUp.password);
  await expect(dashboardPage.browseEventsLink).toBeVisible();
});

test("Invalid Sign Up - No Email Submission", async ({ signupPage }) => {
  await signupPage.navigateToSignupPage();
  await signupPage.enterPassword(userData.newUserSignUp.password);
  await signupPage.enterConfirmPassword(userData.newUserSignUp.password);
  await signupPage.clickCreateAccountButton();
  await expect(signupPage.emailError).toBeVisible();
  await expect(signupPage.emailError).toHaveText(/^Enter a valid email$/);
});

test("Invalid Sign Up - No Password Submission", async ({ signupPage }) => {
  const email = generateUniqueEmail();
  await signupPage.navigateToSignupPage();
  await signupPage.enterEmail(email);
  await signupPage.enterConfirmPassword(userData.newUserSignUp.password);
  await signupPage.clickCreateAccountButton();
  await expect(signupPage.passwordError).toBeVisible();
  await expect(signupPage.passwordError).toHaveText(
    /^Password does not meet the requirements below$/,
  );
});

test("Invalid Sign Up - No Confirm Password Submission", async ({
  signupPage,
}) => {
  const email = generateUniqueEmail();
  await signupPage.navigateToSignupPage();
  await signupPage.enterEmail(email);
  await signupPage.enterPassword(userData.newUserSignUp.password);
  await signupPage.clickCreateAccountButton();
  await expect(signupPage.confirmPasswordError).toBeVisible();
  await expect(signupPage.confirmPasswordError).toHaveText(
    /^Passwords do not match$/,
  );
});

test("Invalid Sign Up - Already Registered Email", async ({ signupPage }) => {
  await signupPage.navigateToSignupPage();
  await signupPage.enterEmail(userData.validUserLogin.email);
  await signupPage.enterPassword(userData.newUserSignUp.password);
  await signupPage.enterConfirmPassword(userData.newUserSignUp.password);
  await signupPage.clickCreateAccountButton();
  await expect(signupPage.alreadyRegisteredEmailError).toBeVisible();
  await expect(signupPage.alreadyRegisteredEmailError).toHaveText(
    /^Email already registered$/,
  );
});
