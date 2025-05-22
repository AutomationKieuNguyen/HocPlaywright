import { test, chromium } from '@playwright/test';

test('test', async ({  }) => {
  const browser = await chromium.launch({ headless: false, args: ['--ignore-certificate-errors'] });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  await page.goto('https://healthier-choice-sit.hpb.gov.sg/', { waitUntil: 'load' });
  
});