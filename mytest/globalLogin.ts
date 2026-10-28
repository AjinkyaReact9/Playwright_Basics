import test, { chromium, expect, webkit, type Browser, type Locator, type Page } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://google.com');
    await page.getByRole('textbox', { name: 'abc@example.com' }).fill('ANashte@globalindustrial.com');
    await page.locator('#password').fill('Newuser1@');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForSelector('.login-banner-logo');
    // await page.context().storageState({path: 'storageState.json'});


    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    // let title:string = await page.title();
    // let url:string = page.url();
    // await page.waitForTimeout(5000)

    // const homeBanner: Locator = page.locator('#mobile_white_smokebg').getByText('THE SOURCE FOR INDUSTRIAL');
    // // console.log('Home page title', title);

    // await page.waitForLoadState('networkidle');
    // await expect(homeBanner).toBeVisible();
    // await page.screenshot({ path: 'homepageQALogin.png' });

    await browser.close();
})();