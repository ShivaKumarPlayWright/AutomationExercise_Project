import {test} from "@playwright/test"
test("makeMytrip",async({page})=>{
    await page.goto("https://automationexercise.com/",{waitUntil:"domcontentloaded"})
   await page.locator("(//div[@class='productinfo text-center']/p[text()='Winter Top'])[1]//following-sibling::a").click()
   await page.pause()
})