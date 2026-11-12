import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.userInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async acessar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async efetuarLogin(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}