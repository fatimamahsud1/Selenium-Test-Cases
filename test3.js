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
        console.log('3) Return Back')
        await driver.findElement(By.css(".backBtn")).click();
        const listUsers = await driver.findElements(By.css(".usersList"))
        console.log(listUsers.length > 0);
        
  

        driver.quit();

}
main();