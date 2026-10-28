import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //Locator: id, class, text
    //By Id
    const firstname: Locator = page.locator('id=input-firstname');
    const lastname: Locator = page.locator('id=input-lastname');

    await firstname.fill('admin');
    await lastname.fill('admin');

    //By classname
    const logoByclassname: Locator = page.locator('.img-responsive');
    const logo = await logoByclassname.isEnabled();
    console.log(logo, 'logoByclassname');

    //By text
    const headerText:Locator = page.locator('text=Register Account');
    const text = await headerText.isEnabled();
    console.log(text, 'text');

    //By CSS use prefix 'css=value'
    const telephone:Locator = page.locator('css=input[name="telephone"]');
    const confirmpswd:Locator = page.locator('css=input[name="confirm"]');
    await telephone.fill('1029384756');
    await confirmpswd.fill('1029384756');

    //By XPath selector use prefix 'xpath=value'
    const pswd:Locator = page.locator('xpath=//input[@name="password" and @type="password"]');
    await pswd.fill('1029384756');
    // const search:Locator = page.locator('xpath=//input[@placeholder="Search" and @name="search"]')
    // await search.fill('pens');
    


    await new Promise(() => {});// Prevents your script from exiting and browser will get close after 30secs
});