import { test, expect } from "@playwright/test"
import testData from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
import LoginToYourAccount from "../pages/loginToYourAccount.page"
import loginWithEANDPData from "../testdata/LoginWithEmailAndPassWord.json"

test("Login user with correct email and password", async ({ page }) => {
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
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    await login_page.loginToyuorAccount(loginWithEANDPData.emailId, loginWithEANDPData.password)
    // 8. Verify that 'Logged in as username' is visible
    let loginValue = page.locator("//a[text()=' Logged in as ']")
    await expect(loginValue).toHaveText(' Logged in as shivakumar')
    // 9. Click 'Delete Account' button
    // 10. Verify that 'ACCOUNT DELETED!' is visible 
    let deletStatus = page.locator("//b[.='Account Deleted!']")
    await expect(deletStatus).toHaveText('Account Deleted!')
})