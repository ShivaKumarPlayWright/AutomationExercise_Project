import {test,expect} from "@playwright/test"
import HomePage from "../pages/Home.page"
import testData from "../testdata/AETestData.json"

test("Verify All Product Page",async({browser})=>{
let context= await browser.newContext({
permissions: ['notifications']
});
let page=await context.newPage()

let home_page=new HomePage(page)
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
await page.goto(testData.url,{waitUnitl:"domcontentloaded"})
// 3. Verify that home page is visible successfully
await expect(page).toHaveTitle("Automation Exercise")
// 4. Click on 'Products' button
await home_page.productLink.click()
await page.locator("//*[name()='svg' and @fill='#5F6368']").click()
// 5. Verify user is navigated to ALL PRODUCTS page successfully
await expect(page).toHaveTitle("Automation Exercise - All Products")
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
await page.pause()
})