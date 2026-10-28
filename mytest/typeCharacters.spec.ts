import test, { Browser, firefox, Locator, Page } from "@playwright/test";


test('type characters sequentially', async () => {
    test.setTimeout(70000); 
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();

    // await page.goto('https://www.flipkart.com/');
    await page.goto("https://qagecmsus.globalindustrial.net/");

    // await page.getByRole('button', { name: '✕' }).click();
    // await page.getByRole('textbox', { name: 'Search for Products, Brands' }).pressSequentially("macbook", {delay: 500});
    const dropdown_2: Locator = await page.getByText('Sign in/Register');
    await dropdown_2.click();
    const signInBtn_2: Locator = await page.getByRole('button', { name: 'Sign in' });
    await signInBtn_2.click();

    const emailId_2: Locator = await page.getByRole('textbox', { name: 'abc@example.com' });
    const password_2: Locator = await page.locator('#password');
    const loginBtn_2: Locator = await page.getByRole('button', { name: 'Sign In' });

    await page.waitForLoadState('networkidle');
    await emailId_2.fill('ANashte@globalindustrial.com');
    await password_2.fill('Newuser1@');
    await loginBtn_2.click();
    await page.waitForLoadState('networkidle');
    await page.locator("#search-input").pressSequentially("WBB788402", { delay: 500 });
    await page.locator(".searchinputbutton").click();
    await page.waitForLoadState('networkidle');
    await page.getByText("Add To Cart").click();
    await page.getByText("View Cart & Checkout").click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: ' Checkout' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByText("Open Credit Line").click()
    await page.waitForLoadState('networkidle');
    await page.getByRole('textbox', { name: 'Enter PO#' }).fill("Test order do not ship");
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Place Order' }).click();await page.waitForTimeout(7000);
    await browser.close();
})