import { test, expect } from "@playwright/test"
import testData from "../testdata/AETestData.json"
import NewUserSingUp from "../pages/NewUserSingUp.page"
import HomePage from "../pages/Home.page"
import LogOutPage from "../pages/Logout.page"
import LoginToYourAccount from "../pages/loginToYourAccount.page"
import loginWithEANDPData from "../testdata/LoginWithEmailAndPassWord.json"
test("Logout user", async ({ page }) => {
    let singup = new NewUserSingUp(page)
    let home_Page=new HomePage(page)
    let login_page=new LoginToYourAccount(page)
    let logOut=new LogOutPage(page)
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto(testData.url, { waitUntil: 'domcontentloaded' })
    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")
    // 4. Click on 'Signup / Login' button
    await home_Page.loginButton.click()
    // 5. Verify 'Login to your account' is visible
    let loginStatus = page.locator("//h2[.='Login to your account']")
    await expect(loginStatus).toHaveText('Login to your account')
    // 6. Enter correct email address and password
    // 7. Click 'login' button

    await login_page.loginToyuorAccount("shivakumar123@gmail.com","123456789")
     // 8. Verify that 'Logged in as username' is visible
    let loginValue = page.locator("//a[text()=' Logged in as ']")
    await expect(loginValue).toHaveText(' Logged in as shivakumar')
    // 9. Click 'Logout' button
    await logOut.LogOutButton.click()
    // 10. Verify that user is navigated to login page
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login")
})