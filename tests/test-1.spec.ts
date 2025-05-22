import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://caleb-sit.styl.solutions/CMS/#/login?returnUrl=%2Fuser%2Fmanage');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('nguyen.thi.oanh.kieu@styl.solutions');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty@12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Verify code' }).click();
  await page.getByRole('textbox', { name: 'Verify code' }).fill('8864');
  await page.getByRole('button', { name: 'Submit' }).click();
});