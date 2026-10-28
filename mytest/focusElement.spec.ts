import test, { Browser, chromium, Page } from "@playwright/test";

test('focus element test', async() => {
    const browser:Browser = await chromium.launch({headless: false,  channel: "chrome"});
    const page:Page = await browser.newPage();

    await page.goto("https://google.com");
    await page.locator("#username").focus();
    await page.locator("#username").fill("UserName");

    await page.waitForTimeout(3000);
    await browser.close();

})