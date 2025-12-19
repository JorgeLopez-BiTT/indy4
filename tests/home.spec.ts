import {test, expect} from '@playwright/test'

test.describe('Home', () =>{
     test('Open page and verify the title', async ({page})=> {

        await page.goto('https://practice.sdetunicorns.com')

        const showtitle = await page.title()
        
        console.log(showtitle)
       
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')


  })
       test('Open page and verify abauot', async ({page})=> {


       await page.goto('https://practice.sdetunicorns.com')


       const menuBar = await page.locator('#zak-primary-menu li[id*=menu]').nth(1)
        
       await menuBar.click()

       await expect(page).toHaveTitle('About – Practice E-Commerce Site')
       

        // await page.goto('https://practice.sdetunicorns.com/about')').textContent()
      

  })

     test('Click on get started button and verify the URL', async ({page})=> {


       await page.goto('https://practice.sdetunicorns.com')

       await page.locator('#get-started').click()

       await expect(page).toHaveURL(/.*#get-started/)

     })
    
      test('Verify the heading text', async ({page})=> {


       await page.goto('/')

       const titleGetStarted =  page.getByText('Think different. Make different.')

       await expect(titleGetStarted).toBeVisible()

     })

      test('Verify my homeLink a', async ({page})=> {

      
       await page.goto('https://practice.sdetunicorns.com');


       const menuBar = page.locator('#zak-primary-menu').getByText('About')

       await menuBar.click()

       await expect(menuBar).toBeVisible()

       

     })
       test('Verify my lupa ', async ({page})=> {

      
       await page.goto('https://practice.sdetunicorns.com');

       const menuBar = page.locator('.zak-header-search').first()

       await menuBar.click()


     })
       test('Verify the text for all links', async ({page})=> {

      const expectedLinks = [
        'Home', 'About', 'Shop', 'Blog', 'Contact', 'My account',
        ]


       await page.goto('https://practice.sdetunicorns.com');

       const menuLinks = await page.locator('#zak-primary-nav li').nth(2).textContent()

       console.log(menuLinks) 

      //  expect(menuLinks).toEqual('SHOP')


     })




})
