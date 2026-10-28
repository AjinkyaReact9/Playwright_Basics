import test, { Browser, chromium, Page } from "@playwright/test";

test('focus element test', async() => {
    const browser:Browser = await chromium.launch({headless: false,  channel: "chrome"});
    const page:Page = await browser.newPage();

    // https://qagecmsus.globalindustrial.net/
    await page.goto("https://qagecmsus.globalindustrial.net/account/login");
    await page.locator("#username").focus();
    await page.locator("#username").fill("UserName");

    await page.waitForTimeout(3000);
    await browser.close();

})