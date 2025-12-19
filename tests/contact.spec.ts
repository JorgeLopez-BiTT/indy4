import {test, expect} from '@playwright/test'

test.describe('test the contact page', () =>{
 
  test('fill in page', async({page})=>{

       await page.goto('/contact/')


       await page.getByRole('textbox',{name : 'name'}).fill('Jorge')

       await page.getByRole('textbox',{name : 'Email'}).fill('cexetor@gmail.com')

       await page.getByRole('textbox',{name : 'Phone'}).fill('4554455454')
       
       await page.getByRole('textbox',{name : 'Message'}).fill('put some data')

       await page.getByRole('button', {name : 'Sublmit'}).click()

       const alert = await page.getByRole('alert').textContent()

       console.log(alert?.trim())
 


  })


})