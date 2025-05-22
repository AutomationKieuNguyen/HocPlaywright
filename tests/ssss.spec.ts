

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

await page.goto('https://healthier-choice-sit.hpb.gov.sg/default/onboarding/home');

await page.getByRole('button', { name: 'Advanced' }).click();
await page.getByRole('link', { name: 'Proceed to healthier-choice-' }).click();
});

