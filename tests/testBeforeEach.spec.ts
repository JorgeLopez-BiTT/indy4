// import { test, expect, Page } from '@playwright/test';

// test.describe.serial('test beforeEach situation', () => {
//   // Run tests sequentially in this block (important if one depends on another's state)

//   let page: Page;

// //   test.beforeAll(async ({ browser }) => {
// //     page = await browser.newPage();
// //     await page.goto('/my-account');
// //   });

//   test.afterAll(async () => {
//     await page.close();
//   });

//   test('execute test', async () => {
//     // No {page} fixture requested → uses the shared 'page'
//     await page.getByRole('textbox', { name: 'Username or email address' }).fill('name');
//   });

//   test('execute test 2', async () => {
//     // Continues on the same page (username already filled)
//     await page.locator('#password').fill('Pass');
//     // Optionally add assertions here, e.g., await expect(page).toHaveURL(...);
//   });
// });