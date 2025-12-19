import {test, expect} from '@playwright/test'
import HomePage2 from '../pages/home2.page'

test.describe('suite 1', ()=>{
let homePage2 : HomePage2 
 
    test('test 1 ', async({page})=>{    
     homePage2 = new HomePage2(page)

       await homePage2.navigate()
       
       await homePage2.getStartedBtn2.click()
        
// import Homepage2 from '../pages/home2.page'
// test.describe('Home', () =>{
//     let homePage2 : Homepage2

//     test('Open homepage and verify title', async ({page}) =>{
//         homePage2 = new Homepage2(page)
        
//         await page.goto('https://practice.sdetunicorns.com/')

//         await homePage2.getStartedBtn2.click()
     

    })
  })


