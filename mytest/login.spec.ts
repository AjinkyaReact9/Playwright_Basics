import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test.use({
    actionTimeout: 70000
})

test('login', async () => {
    const browser: Browser = await webkit.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://qagecmsus.globalindustrial.net/');

    const dropdown: Locator = await page.getByText('Sign in/Register');
    await dropdown.click();
    const signInBtn: Locator = await page.getByRole('button', { name: 'Sign in' });
    await signInBtn.click();

    const emailId: Locator = await page.getByRole('textbox', { name: 'abc@example.com' });
    const password: Locator = await page.locator('#password');
    const loginBtn: Locator = await page.getByRole('button', { name: 'Sign In' });

    await page.waitForLoadState('networkidle');
    await emailId.fill('ANashte@globalindustrial.com');
    await password.fill('Newuser1@');
    await loginBtn.click();

    const homeBanner: Locator = page.locator('#mobile_white_smokebg').getByText('THE SOURCE FOR INDUSTRIAL');
    // console.log('Home page title', title);

    await page.waitForLoadState('networkidle');
    await expect(homeBanner).toBeVisible();
    await page.screenshot({ path: 'homepageQALogin.png' });

    await browser.close();
});

test('multiple logins', async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    //browserContext_1
    const browserContext_1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext_1.newPage();

    //browserContext_2
    const browserContext_2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext_2.newPage();

    //browser1:
    await page1.goto('https://qagecmsus.globalindustrial.net/');
    const dropdown_1: Locator = await page1.getByText('Sign in/Register');
    await dropdown_1.click();
    const signInBtn_1: Locator = await page1.getByRole('button', { name: 'Sign in' });
    await signInBtn_1.click();

    const emailId_1: Locator = await page1.getByRole('textbox', { name: 'abc@example.com' });
    const password_1: Locator = await page1.locator('#password');
    const loginBtn_1: Locator = await page1.getByRole('button', { name: 'Sign In' });

    await page1.waitForLoadState('networkidle');
    await emailId_1.fill('ANashte@globalindustrial.com');
    await password_1.fill('Newuser1@');
    await loginBtn_1.click();

    //browser2:
    await page2.goto('https://qagecmsus.globalindustrial.net/');
    const dropdown_2: Locator = await page2.getByText('Sign in/Register');
    await dropdown_2.click();
    const signInBtn_2: Locator = await page2.getByRole('button', { name: 'Sign in' });
    await signInBtn_2.click();

    const emailId_2: Locator = await page2.getByRole('textbox', { name: 'abc@example.com' });
    const password_2: Locator = await page2.locator('#password');
    const loginBtn_2: Locator = await page2.getByRole('button', { name: 'Sign In' });

    await page2.waitForLoadState('networkidle');
    await emailId_2.fill('brij2@yahoo.com');
    await password_2.fill('Newuser#1');
    await loginBtn_2.click();

    const homeBanner_1: Locator = page1.locator('#mobile_white_smokebg').getByText('THE SOURCE FOR INDUSTRIAL');
    const homeBanner_2: Locator = page2.locator('#mobile_white_smokebg').getByText('THE SOURCE FOR INDUSTRIAL');

    await page1.waitForLoadState('networkidle');
    await expect(homeBanner_1).toBeVisible();
    await page1.screenshot({ path: 'homepageQALogin_1.png' });
    await page2.waitForLoadState('networkidle');
    await expect(homeBanner_2).toBeVisible();
    await page2.screenshot({ path: 'homepageQALogin_2.png' });

    await browserContext_1.close();
    await browserContext_2.close();
    await browser.close();
});

test('resgister', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart');


    const dropDown: Locator = await page.getByRole('link', { name: ' My Account' })
    await dropDown.click();
    const myAccount: Locator = await page.locator('[href="https://naveenautomationlabs.com/opencart/index.php?route=account/register"]');
    await myAccount.click();

    const firstName: Locator = await page.locator('#input-firstname');
    const lastName: Locator = await page.getByRole('textbox', { name: '* Last Name' });
    const email: Locator = await page.getByRole('textbox', { name: '* E-Mail' });
    const telephone: Locator = await page.getByRole('textbox', { name: '* Telephone' });
    const password: Locator = await page.getByRole('textbox', { name: '* Password', exact: true });
    const confirmPassword: Locator = await page.getByRole('textbox', { name: '* Password Confirm' });
    const privacyPolicy: Locator = await page.getByRole('checkbox');
    const continueBtn: Locator = await page.locator('[value="Continue"]');

    await firstName.fill('Ajinkya');
    await lastName.fill('Automation');
    await email.fill('userautomationtest@gmail.com');
    await telephone.fill('0987654321');
    await password.fill('Newuser@1');
    await confirmPassword.fill('Newuser@1');

    await privacyPolicy.click();
    await continueBtn.click();

    await page.screenshot({ path: 'registeredAccount.png' });

    await browser.close();

});

test('auth test', async ()=> {
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
   const context:BrowserContext = await browser.newContext();
   const page:Page = await context.newPage();

   const username = 'ANashte@globalindustrial.com';
   const password = 'Newuser1@';
   const authHeader = 'Basic ' + btoa(username+':'+password); 
   page.setExtraHTTPHeaders({Authorization: authHeader});

   await page.goto('https://qagecmsus.globalindustrial.net/');

   await new Promise(() => {}); //pervents your script from exiting;
});

test('Select Based Drop Down test', async ()=> {
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
//    const context:BrowserContext = await browser.newContext();
   const page:Page = await browser.newPage();

//    const username = 'ANashte@globalindustrial.com';
//    const password = 'Newuser1@';
//    const authHeader = 'Basic ' + btoa(username+':'+password); 
//    page.setExtraHTTPHeaders({Authorization: authHeader});

   await page.goto('https://www.magupdate.co.uk/magazine-subscription/PGHI');

   const countryDropDown = 'select#Contact_CountryCode';
   
   
//    await page.selectOption(countryDropDown, {value: 'DE'});
    //   await page.selectOption(countryDropDown, {label: 'Andorra'});
    //   await page.selectOption(countryDropDown, {index: 7});

    //To display all select options in console
    //select#Constact_CountryCode > option
    const allOptions = await page.$$(countryDropDown + ' > option')
    console.log(allOptions.length);

    for (const e of allOptions){
        const text = await e.textContent();
        // console.log(text);

        if(text === 'India'){
            await page.selectOption(countryDropDown, {label: text});
            break;
        }
        
    }
    

//    await new Promise(() => {}); //pervents your script from exiting;

      await page.waitForTimeout(15000);
});



test('Select mouseHover test', async ()=> {
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
//    const context:BrowserContext = await browser.newContext();
   const page:Page = await browser.newPage();

//    const username = 'ANashte@globalindustrial.com';
//    const password = 'Newuser1@';
//    const authHeader = 'Basic ' + btoa(username+':'+password); 
//    page.setExtraHTTPHeaders({Authorization: authHeader});

   await page.goto('https://qagecmsus.globalindustrial.net/');

    await page.getByText('SHOP ALL CATEGORIES').click();
    const P1 : Locator = page.locator('#nav-menu-modal').getByText('Janitorial & Facility')
    await P1.hover()
    await P1.click();
    await page.waitForTimeout(3000);
    const P2 = page.locator('span').filter({ hasText: 'Farm & Livestock Equipment' }).first()
    await P2.hover();
    await P2.click();
    await page.waitForTimeout(3000);
    const P3 = page.getByRole('link', { name: 'Stock Tanks' })
    await P3.hover();
    await P3.click();



//    await new Promise(() => {}); //pervents your script from exiting;

      await page.waitForTimeout(15000);
});


test('primaryCategory test', async ()=> {
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
//    const context:BrowserContext = await browser.newContext();
   const page:Page = await browser.newPage();

//    const username = 'ANashte@globalindustrial.com';
//    const password = 'Newuser1@';
//    const authHeader = 'Basic ' + btoa(username+':'+password); 
//    page.setExtraHTTPHeaders({Authorization: authHeader});

   await page.goto('https://qagecmsus.globalindustrial.net/');

    await page.getByText('SHOP ALL CATEGORIES').click();
    // li.list-menu > span.active-category-tag > span.category-desc
    const primaryMenusLi = 'li.list-menu';
    // const primaryMenusSpan = 'span.active-category-tag';
   const primaryMenusList = await page.locator(primaryMenusLi + ' > span.active-category-tag' + ' > span.category-desc');
   const count = await primaryMenusList.count();
//    for(const e of primaryMenusList){

//    }
   

      await page.waitForTimeout(15000);
})



