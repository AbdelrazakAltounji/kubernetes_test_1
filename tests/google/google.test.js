const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const urlToTest = 'https://www.google.com/'

describe('1. Google search test scenario', () => {
    let driver

    beforeAll(async () => {
        driver = getDriver()
        allure.step('Step inside before all', () => {})
    })

    test('Googling "google"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('google', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        driver.takeScreenshot().then((png) => {
            allure.attachment('Screenshot', png, 'image/png')
        })
        expect(await driver.getTitle()).toEqual('google - Google Search')
    })

    test('Googling "Rexel"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('Rexel', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('Rexel - Google Search')
    })

    afterAll(async () => {
        allure.step('Step inside after all', () => {})
        await driver.quit()
    })
})
