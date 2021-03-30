const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const urlToTest = 'https://www.google.com/'

describe('JS - Google - Test Suite 1', () => {
    let driver

    beforeAll(async () => {
        allure.step('Before all', () => {
            driver = getDriver()
        })
    })

    afterEach(async () => {
        if (jasmine.currentTest.failedExpectations.length > 0) {
            const screenshot = await driver.takeScreenshot()
            await allure.attachment('screenshot', Buffer.from(screenshot, 'base64'), 'image/png')
        }
    })

    test('Googling "google"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('google', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('google - Google Search')
    })

    test('Googling "Rexel" fail', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('Rexel', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('rexel - Google Search')
    })

    test('Googling "Rexel"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('Rexel', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('Rexel - Google Search')
    })

    afterAll(async () => {
        allure.step('After all', async () => {
            await driver.quit()
        })
    })
})
