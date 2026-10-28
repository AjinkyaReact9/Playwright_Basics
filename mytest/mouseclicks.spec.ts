import test, { Browser, chromium, Page } from "@playwright/test";


test('mouse click events', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    //double click
    // await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    // // await page.getByText('Double-Click Me To See Alert').dblclick();

    // //how will you perform context click or right click or double tab click
    // await page.getByText('right click me').click({button: 'right'});

    // //shift + click;
    // await page.goto('https://the-internet.herokuapp.com/shifting_content');
    // await page.getByText('Example 1: Menu Element').click({modifiers: ["Shift"]});

    //mouse hover;
    // await page.goto('https://www.spicejet.com/');
    // await page.getByText('Add-ons').first().hover();
    // await page.getByText('SpiceMax').first().click();

    await page.waitForTimeout(15000);
    browser.close();
})

test('move to element', async() => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);

})