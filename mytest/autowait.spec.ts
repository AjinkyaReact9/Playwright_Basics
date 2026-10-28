import test, { Browser, chromium, Page } from "@playwright/test";

test('auto wait checks',async ()=>{
    const browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://classic.freecrm.com/register/");
    await page.locator("input[name='agreeTerms']").click({timeout: 5000});

    await page.waitForTimeout(3000);
})