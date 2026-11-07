class SignupPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByTestId("register-email");
    this.passwordField = page.getByTestId("register-password");
    this.confirmPasswordField = page.getByPlaceholder("Repeat your password");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async navigateToSignupPage() {
    await this.page.goto("/register");
  }
  async enterEmail(email) {
    await this.emailField.fill(email);
  }
  async enterPassword(password) {
    await this.passwordField.fill(password);
  }
  async enterConfirmPassword(password) {
    await this.confirmPasswordField.fill(password);
  }
  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async signup(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.enterConfirmPassword(password);
    await this.clickCreateAccountButton();
  }
}

export { SignupPage };
