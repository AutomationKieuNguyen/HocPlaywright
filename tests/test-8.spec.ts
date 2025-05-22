import { test, chromium } from '@playwright/test';

test('Bypass SSL warning with Chromium context', async () => {
  const browser = await chromium.launch({ headless: false, args: ['--ignore-certificate-errors'] });

  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  await page.goto('https://healthier-choice-sit.hpb.gov.sg', { waitUntil: 'load' });

  // Tiếp tục test sau khi đã bypass thành công
  await page.getByRole('button', { name: 'btn-login-sinpass' }).click();
  await page.getByRole('button', { name: 'Business Entity' }).click();
  await page.getByRole('link', { name: 'NRIC: S8979373D Company name' }).click();
  await page.goto('https://healthier-choice-sit.hpb.gov.sg/default/dashboard');
  await page.locator('#profile-dropdown').nth(1).click();
  await page.waitForTimeout(2000);
  await page.locator('#profile-dropdown > .sprite-icon').click();
   await page.waitForTimeout(2000);
  await page.getByText('Logout').click();
   await page.waitForTimeout(2000);

  await browser.close();
});