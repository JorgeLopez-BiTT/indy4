import { test, expect } from '@playwright/test'

test('log menu text', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/')

  const menuItems = page.locator('#zak-primary-menu li[id*=menu]').nth(2)
 

  const textContent = await menuItems.allTextContents()
  console.log(textContent)
})
