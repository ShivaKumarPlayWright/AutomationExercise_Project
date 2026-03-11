import { test, expect } from "@playwright/test"
import testData from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
import NewUserSingUp from "../pages/NewUserSingUp.page"
import FormFillDetails from "../pages/FormFill.page"
import AddressInformation from "../pages/AddressInformation.page.js"
import AddressInformationData from "../testdata/AddressInformation.json"

test("Register_User", async ({ page }) => {

    let home_Page = new HomePage(page)
    let newUser_SingUp = new NewUserSingUp(page)
    let formFill = new FormFillDetails(page)
    let address=new AddressInformation(page)

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await page.goto(testData.url)
    //3. Verify that home page is visible successfully
    await expect(page).toHaveTitle('Automation Exercise')
    //4. Click on 'Signup / Login' button
    await home_Page.loginButton.click()
    //5. Verify 'New User Signup!' is visible
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login")
    //6. Enter name and email address
    //7. Click 'Signup' button
    let emailID=testData.emailID+Date.now()+'@gmail.com'
    await newUser_SingUp.newUserLogin(testData.userName, emailID)
    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page).toHaveTitle("Automation Exercise - Signup")
    const heading = page.locator('b').first();
    await expect(heading).toHaveText('Enter Account Information');
    //9. Fill details: Title, Name, Email, Password, Date of birth
    //10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    await formFill.formFill()
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    //13. Click 'Create Account button'
    await address.addressInformation(AddressInformationData.firstName, AddressInformationData.lastName,
        AddressInformationData.company, AddressInformationData.Address_1, AddressInformationData.Address_2, AddressInformationData.Country,
        AddressInformationData.state, AddressInformationData.city, AddressInformationData.zipcode, AddressInformationData.mobileNumber)
   //14. Verify that 'ACCOUNT CREATED!' is visible
   await expect(page).toHaveText('Account Created!')
   console.log("added");
   
})