import {test,expect} from "@playwright/test"
import testData from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
import NewUserSingUp from "../pages/NewUserSingUp.page"
test("register with existing email id",async({page})=>{
    let home_page=new HomePage(page)
    let newUser_singp=new NewUserSingUp(page)
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
await page.goto(testData.url,{waitUntil:"domcontentloaded"})
// 3. Verify that home page is visible successfully
await expect(page).toHaveTitle("Automation Exercise")
// 4. Click on 'Signup / Login' button
await home_page.loginButton.click()
// 5. Verify 'New User Signup!' is visible 
await expect(page.locator("//h2[.='New User Signup!']")).toHaveText("New User Signup!")
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
await newUser_singp.newUserLogin(testData.userName,testData.emailID)
// 8. Verify error 'Email Address already exist!' is visible
await expect(page.locator("//p['Email Address already exist!']").first()).toHaveText("Email Address already exist!")

})