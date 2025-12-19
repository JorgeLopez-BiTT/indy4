import { test, expect } from '@playwright/test';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {

test('should upload a test file', async({page})=>{




   await page.goto('/cart')
   
   const filePath = path.join(__dirname, '../data/descarga.png')

   await page.setInputFiles('#upfile_1', filePath)

   await page.locator('#upload_1').click()

  


   const successMsj = await page.locator('#wfu_messageblock_header_1_1')
   
   successMsj.waitFor({state:'visible', timeout: 10000})   

   await expect(successMsj).toContainText('uploaded successfully',{timeout:10000})
    
   
   


   })


})