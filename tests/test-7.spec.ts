import { test, expect } from '@playwright/test';

test('Input the invalid code, error is shown', async ({ page }) => {
  await page.goto('https://caleb-sit.styl.solutions/CMS/#/login?returnUrl=%2Fdashboard');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('nguyen.thi.oanh.kieu@styl.solutions');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty@12');
  await page.locator('#login-form div').filter({ hasText: 'Sign In' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Verify code' }).click();
  await page.getByRole('textbox', { name: 'Verify code' }).fill('7138');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByLabel('Verification code invalid')).toBeVisible();
    await expect(page.getByLabel('Verification code invalid')).toBeVisible();
});