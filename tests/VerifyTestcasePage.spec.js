import {test,expect} from "@playwright/test"
import testData from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
test("Verify test case page",async({page})=>{
    let home_page=new HomePage(page)
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
await page.goto(testData.url,{waitUntil:"domcontentloaded"})
// 3. Verify that home page is visible successfully
await expect(page).toHaveTitle("Automation Exercise")
// 4. Click on 'Test Cases' button
await home_page.testCaseLink.click()
// 5. Verify user is navigated to test cases page successfully
await expect(page).toHaveTitle("Automation Practice Website for UI Testing - Test Cases")
})