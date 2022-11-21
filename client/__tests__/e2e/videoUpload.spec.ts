import { test, expect } from '@playwright/test';

test('Homepage has a button with upload text and navigate to the upload page.', async ({ page }) => {
  await page.goto('http://localhost:3000');


  await expect(page.getByRole('heading')).toBeVisible() 

  const upload = page.getByRole('button', {name: /upload/i})

  await upload.click()

  await expect(page).toHaveURL(/upload/);

});
