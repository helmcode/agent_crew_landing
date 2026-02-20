import { test, expect } from '@playwright/test';

test.describe('AgentCrew Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Orchestrate AI Agent Teams');
  });

  test('should display navbar with AgentCrew logo', async ({ page }) => {
    const navbar = page.getByRole('navigation');
    await expect(navbar.getByText('AgentCrew', { exact: true }).first()).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    const featuresSection = page.locator('#features');
    await expect(featuresSection.getByRole('heading', { name: 'Create Teams' })).toBeVisible();
    await expect(featuresSection.getByRole('heading', { name: 'Deploy Instantly' })).toBeVisible();
  });

  test('should display how it works section', async ({ page }) => {
    const howItWorksSection = page.locator('#how-it-works');
    await expect(howItWorksSection.getByRole('heading', { level: 2 })).toContainText('How it works');
  });

  test('should display footer with copyright', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('AgentCrew', { exact: true }).first()).toBeVisible();
  });

  test('Get Started CTA should be visible and clickable', async ({ page }) => {
    const cta = page.getByRole('link', { name: /Get Started/i }).first();
    await expect(cta).toBeVisible();
  });
});
