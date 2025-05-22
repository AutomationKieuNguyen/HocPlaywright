import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://caleb-sit.styl.solutions/CMS/#/login?returnUrl=%2Fdashboard');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('nguyen.thi.oanh.kieu@styl.solutions');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty!12');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty@12');
  await page.locator('#login-form div').filter({ hasText: 'Sign In' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Verify code' }).click();
  await page.getByRole('textbox', { name: 'Verify code' }).fill('7138');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: ' System ' }).click();
  await page.getByRole('button', { name: ' Toggle navigation' }).click();
  await page.getByRole('link', { name: 'User Image nguyen.thi.oanh.' }).click();
  await page.getByText('Logout').click();
});