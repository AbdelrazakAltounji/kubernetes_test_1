const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const urlToTest = 'https://www.google.com/'

describe('Second Google search test scenario', () => {
    let driver

    beforeAll(async () => {
        driver = getDriver()
    })

    test('Googling "google"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('google', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('google - Recherche Google')
    })

    test('Googling "Rexel"', async () => {
        await driver.get(urlToTest)
        const element = await driver.findElement(By.name('q'))
        element.sendKeys('Rexel', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
        expect(await driver.getTitle()).toEqual('Rexel - Recherche Google')
    })

    afterAll(async () => {
        await driver.quit()
    })
})
