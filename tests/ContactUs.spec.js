import { test, expect } from "@playwright/test"
import testdata from "../testdata/AETestData.json"
import HomePage from "../pages/Home.page"
import ContactUs from "../pages/ContactUs.page"
import contactData from "../testdata/ContactUS.json"
test("Contact US", async ({ page }) => {
    let home_page = new HomePage(page)
    let contact_us = new ContactUs(page)
    // 9. Click OK button
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto(testdata.url, { waitUntil: "domcontentloaded" })
    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")
    // 4. Click on 'Contact Us' button
    await contact_us.ContactUsButton.click({ force: true })
    // 5. Verify 'GET IN TOUCH' is visible
    await expect(page.locator("//h2[.='Get In Touch']")).toHaveText("Get In Touch")
    // 6. Enter name, email, subject and message
    // 7. Upload file
    // 8. Click 'Submit' button
    await contact_us.contactUs(testdata.userName, testdata.emailID, contactData.subject, contactData.message, contactData.filePath)

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    await page.waitForSelector("//div[.='Success! Your details have been submitted successfully.' and @class='status alert alert-success']")
    await expect(page.locator("//div[.='Success! Your details have been submitted successfully.' and @class='status alert alert-success']")).toHaveText("Success! Your details have been submitted successfully.")
    // 11. Click 'Home' button and verify that landed to home page successfully
    await page.locator("//a/span").click()
    await expect(page).toHaveTitle("Automation Exercise")
})  