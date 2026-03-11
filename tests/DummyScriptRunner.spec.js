import {test} from "@playwright/test"
test("Dummy script",async({page})=>{
    //option[.='Day']/following-sibling::option
    //option[.='Month']/following-sibling::option
    //option[.='Year']/following-sibling::option
    await page.goto("https://automationexercise.com/signup")
    let days=await page.locator("//option[.='Day']/following-sibling::option").allTextContents()
     console.log(await days);
    
})