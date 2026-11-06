class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByPlaceholder("you@email.com");
    this.passwordField = page.locator("#password");
    this.signinButton = page.getByRole("button", {
      name: "Sign In",
    });
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }
  async enterPassword(password) {
    await this.passwordField.fill(password);
  }
  async clickSigninButton() {
    await this.signinButton.click();
  }
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSigninButton();
  }

  async navigateToLoginPage() {
    await this.page.goto("/");
  }
}

export { LoginPage };
