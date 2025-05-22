import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('await page.goto('chrome-error://chromewebdata/');
  await page.getByRole('button', { name: 'Advanced' }).click();
  await page.getByRole('link', { name: 'Proceed to healthier-choice-' }).click();');
  await page.getByRole('button', { name: 'Advanced' }).click();
  await page.getByRole('link', { name: 'Proceed to healthier-choice-' }).click();
  await page.getByRole('button', { name: 'btn-login-sinpass' }).click();
  await page.getByRole('button', { name: 'Business Entity' }).click();
  await page.getByRole('link', { name: 'NRIC: S8979373D Company name' }).click();
  await page.getByRole('button', { name: 'btn-login-sinpass' }).click();
  await page.getByRole('button', { name: 'Business Entity' }).click();
  await page.getByRole('link', { name: 'NRIC: S8979373D Company name' }).click();
  await page.locator('#profile-dropdown').nth(1).click();
  await page.locator('#profile-dropdown > .sprite-icon').click();
  await page.getByText('Logout').click();
});