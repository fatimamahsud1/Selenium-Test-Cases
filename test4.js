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
    
        console.log('4) Check User is Added')
        const listUserNames = await driver.findElements(By.css(".addedUserName"))
        console.log(await listUserNames[listUserNames.length -1].getText() == "FATIMA MAHSUD");
  
        driver.quit();

}
main();