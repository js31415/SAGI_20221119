import { test, expect } from '@playwright/test';

test('Homepage has a button with upload text and navigate to the upload page.', async ({ page }) => {
  await page.goto('http://localhost:3000');


  await expect(page.getByRole('heading')).toBeVisible() 

  const upload = page.getByRole('button', {name: /upload/i})

  await upload.click()

  await expect(page).toHaveURL(/upload/);

});


test.skip('Upload page has a form where you can upload your video', async ({ page }) => {
  await page.goto('http://localhost:3000/upload');

  await expect(page.getByRole('heading', {name: "Upload your video"})).toBeVisible() 

  const videoTitleInput = await page.getByLabel(/video title/);
  const videoFileInput = await page.getByLabel(/upload video/);
  const videoCategorySelect = await page.getByLabel(/choose a catogery/)

});

