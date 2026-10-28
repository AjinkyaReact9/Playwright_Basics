import test, { Browser, BrowserContext, chromium, firefox, Locator, Page } from "@playwright/test";

test('No incognito test', async() => {
    // const browser:BrowserContext = await chromium.launchPersistentContext('', {headless: false, channel: 'chrome'});
    const browser:BrowserContext = await firefox.launchPersistentContext('', {headless: false});


    const pages = browser.pages();
    const page:Page = pages[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    await page.locator('id=input-firstname').fill('Ajinkya');
    await page.locator('id=input-lastname').fill('Nashte');

    await new Promise(() => {});
});

test('chaining locators test', async() => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Ajinkya');
    await page.locator('form#Form_getForm >> #Form_getForm_action_submitForm').click();

    await new Promise(() => {});
})