import { test, expect } from "@playwright/test"
import testData from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
import LoginToYourAccount from "../pages/loginToYourAccount.page"
import loginWithEANDPData from "../testdata/LoginWithEmailAndPassWord.json"

test("Login user with incorrect email and password", async ({ page }) => {
    let home_page = new HomePage(page)
    let login_page = new LoginToYourAccount(page)
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto(testData.url, { waitUntil: 'domcontentloaded' })

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle('Automation Exercise')
    // 4. Click on 'Signup / Login' button
    await home_page.loginButton.click()
    // 5. Verify 'Login to your account' is visible
    let loginStatus = page.locator("//h2[.='Login to your account']")
    await expect(loginStatus).toHaveText('Login to your account')
   // 6. Enter incorrect email address and password
   login_page.loginToyuorAccount("gjhghghjg@gmail.com","ygfv876765r")
   // 7. Click 'login' button
   // 8. Verify error 'Your email or password is incorrect!' is visible
   await expect(page.locator("//p[.='Your email or password is incorrect!']")).toHaveText("Your email or password is incorrect!")
   await page.pause()
})