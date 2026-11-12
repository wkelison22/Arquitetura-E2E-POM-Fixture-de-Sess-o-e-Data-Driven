import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly titleSpan: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(private page: Page) {
    this.titleSpan = page.locator('.title');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}