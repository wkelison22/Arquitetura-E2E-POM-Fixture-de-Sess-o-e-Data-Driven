import { test, expect } from '../fixtures/auth.fixture';

test('[CT - Sessão] Deve iniciar diretamente na area logada com sucesso', async ({ dashboardPage }) => {
  await expect(dashboardPage.titleSpan).toHaveText('Products');
  await dashboardPage.logout();
});