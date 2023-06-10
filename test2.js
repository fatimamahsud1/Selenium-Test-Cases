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
    

        console.log('2) Open Add user form')
        await driver.findElement(By.css(".addUserBtn")).click();    
        const isFormPage = await driver.findElement(By.css(".addNewUserHeading")).isDisplayed();
        console.log(isFormPage);


console.log('2) Save New User')
await driver.findElement(By.css("#userName")).sendKeys("FATIMA MAHSUD");
await driver.findElement(By.css("#userEmail")).sendKeys("fatima mahsud1");
await driver.findElement(By.css("#saveUser")).click();
const alertText = await driver.switchTo().alert().getText();
// let added_tasksUpdated = await driver.findElements(By.css(".added-tasks"))
console.log(alertText == "Data Inserted Successfully!");
await driver.switchTo().alert().accept();
  

        driver.quit();

}
main();