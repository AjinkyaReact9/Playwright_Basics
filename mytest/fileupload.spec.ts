import test, { Browser, chromium, Locator, Page } from "@playwright/test";

test('file upload', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    // await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    await page.goto('https://qagecmsus.globalindustrial.net/');


    // await page.locator("input[name='upfile']").setInputFiles("C:/Users/ANashte/Downloads/image.png");
    const dropdown: Locator = await page.getByText('Sign in/Register');
    await dropdown.click();
    const signInBtn: Locator = await page.getByRole('button', { name: 'Sign in' });
    await signInBtn.click();

    const emailId: Locator = await page.getByRole('textbox', { name: 'abc@example.com' });
    const password: Locator = await page.locator('#password');
    const loginBtn: Locator = await page.getByRole('button', { name: 'Sign In' });
    const viewCart: Locator = await page.locator(".cartPrice");
    const checkoutBtn: Locator = await page.getByRole('button', { name: 'Checkout' });
    const uploadPoBtn: Locator = await page.locator("#imgInp");

    await page.waitForLoadState('networkidle');
    await emailId.fill('ANashte@globalindustrial.com');
    await password.fill('Newuser1@');
    await loginBtn.click();

    await page.waitForLoadState('networkidle');
    await viewCart.click();

    await page.waitForLoadState('networkidle');
    await checkoutBtn.click();

    await page.waitForLoadState('networkidle');
    await uploadPoBtn.setInputFiles("C:/Users/ANashte/Documents/Before_Changes PDPpage Desktop.pdf");

    await page.waitForLoadState('networkidle');


    await page.waitForTimeout(5000);

    await browser.close();


})