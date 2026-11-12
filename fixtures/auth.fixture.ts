import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type MyFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.acessar();
    await loginPage.efetuarLogin('standard_user', 'secret_sauce');
    await dashboardPage.titleSpan.waitFor({ state: 'visible' });

    await use(dashboardPage);
  },
});

export { expect } from '@playwright/test';