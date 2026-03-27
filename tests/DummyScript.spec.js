import { test, expect } from "@playwright/test"
// // const { chromium } = require('playwright');

// // (async () => {
// //   const browser = await chromium.launch({ headless: false });
// //   const context = await browser.newContext();
// //   const page = await context.newPage();
// //   await page.goto('https://example.com');
// //   console.log(await page.title());
// //   await page.pause()
// //   await browser.close();
// // })();


// //automate amazon app

// test("fetch all products", async ({ page }) => {
//     await page.goto("https://www.amazon.in/", { waitUntil: "domcontentloaded" })
//     await page.getByPlaceholder("Search Amazon.in").fill("Laptop")
//     await page.waitForSelector("//div[@role='row']")
//     let autoSuggestions = await page.locator("//div[@role='row']")
//     const count = await autoSuggestions.count()
//     console.log(count);

//     for (let i = 0; i < count; i++) {
//         const text = await autoSuggestions.nth(i).innerText();
//         console.log(`Suggestion ${i + 1}: ${text}`);
//         if (text.trim() === "laptop bags for men office use") {
//             await autoSuggestions.nth(i).click()
//             break
//         }
//     }
//     await page.screenshot({ path: 'screenshot.png', fullPage: true });
//     await page.context().tracing.start({ screenshots: true, snapshots: true });
//     await page.context().tracing.stop({ path: 'trace.zip' });
//     // await page.pause()
//     await page.close()
// })

// test("",async({page})=>{
//   let result= await page.goto("https://automationexercise.com/")
//   console.log(result);
  
// })

let promise=new Promise((resolve,reject)=>{
    resolve("success")
})
promise.then(result=> console.log("pass")
)
