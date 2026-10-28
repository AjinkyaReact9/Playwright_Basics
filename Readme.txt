Note:

    a. if the projects are commentedin playwright.config.ts then it will run testcases by default in chrome browser provided by playwright and if it is specifically mwntioned 
    in test case about browser like "chrome", then that specific case it will run in original chrome browser.

    b. if we keep the projects variable (playwright.config.ts) as [] whose length will be zero, then it will throw error 

    Architecture of the playwright

    HTTP
    WebSocket Protocol

    Storage state: 
        login once ----> (cookies, session details, token, exp, storage)