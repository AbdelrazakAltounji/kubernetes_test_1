const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const urlToTest = 'https://www.google.com/'

describe('1. Google search test scenario', () => {
    let driver

    beforeAll(async () => {
        allure.step('Before all', () => {
            driver = getDriver()
        })
    })

    test('Googling "google"', async () => {
        allure.step('load page', () => {
            await driver.get(urlToTest)
        })
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('google', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        const screenshot = await driver.takeScreenshot()
        await allure.attachment('screenshot', Buffer.from(screenshot, 'base64'), 'image/png')
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
