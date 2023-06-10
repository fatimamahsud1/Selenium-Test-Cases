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
    
        console.log('5) Delete User')
        const deleteBtns = await driver.findElements(By.css(".deleteBtn"))
        await deleteBtns[deleteBtns.length -1].click()
        const detekeAlertText = await driver.switchTo().alert().getText();
        console.log(detekeAlertText == "Do you really want to delete this record?");
        await driver.switchTo().alert().accept();

        driver.quit();

}
main();