import {test as base} from "@playwright/test";
export const test=base.extend({
    LoginPage:async({page},use)=>{
       await page.goto("https://www.saucedemo.com/");
       await page.locator("#user-name").fill("standard_user");
       await page.locator("#password").fill("secret_sauce");
       await page.locator("#login-button").click();
       await use(page); 
    }
});