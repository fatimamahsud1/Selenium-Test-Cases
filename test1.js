const { By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.headless();
chromeOptions.addArguments('--disable-dev-shm-usage')

const test = async () => {
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(chromeOptions)
		.build();
    
    console.log("1) Testing If app loads");
        const title = await driver.getTitle()
        console.log(title == "CRUD Application");
  

        driver.quit();

}
main();