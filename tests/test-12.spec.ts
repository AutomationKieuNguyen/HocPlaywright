import { test, chromium } from '@playwright/test';

test('Bypass SSL warning with Chromium context', async () => {
  const browser = await chromium.launch({ headless: false, args: ['--ignore-certificate-errors'] });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  await page.goto('https://healthier-choice-sit.hpb.gov.sg', { waitUntil: 'load' });
  await page.getByRole('button', { name: 'btn-login-sinpass' }).click();
  await page.getByRole('button', { name: 'Business Entity' }).click();
   await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'NRIC: S8979373D Company name' }).click();
   await page.waitForTimeout(5000);

await page.locator('a').filter({ hasText: /^Application$/ }).click();
await page.getByRole('link', { name: 'Manage HCS Application' }).click();
await page.getByRole('textbox', { name: 'Application Number' }).click();
await page.getByRole('textbox', { name: 'Application Number' }).fill('210010');
await page.getByRole('textbox', { name: 'Application Number' }).press('Enter');
await page.getByRole('button', { name: 'Search' }).click();
await page.getByText('HCS210010').click();
});