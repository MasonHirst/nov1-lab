const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('create a movie, then delete it', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//input')).sendKeys('Batman\n')

    await driver.sleep(1000)

    await driver.findElement(By.id('Batman')).click()

    await driver.sleep(1000)
})


test('create a movie, then cross it off', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman\n')

    await driver.sleep(1000)

    await driver.findElement(By.xpath('//span')).click()

    await driver.sleep(1000)
})


test('create a 3 movies using the add button', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Superman')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(800)

    await driver.findElement(By.xpath('//input')).clear()
    await driver.findElement(By.xpath('//input')).sendKeys('Cars')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(800)

    await driver.findElement(By.xpath('//input')).clear()
    await driver.findElement(By.xpath('//input')).sendKeys('The Princess Bride')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(800)
})

















