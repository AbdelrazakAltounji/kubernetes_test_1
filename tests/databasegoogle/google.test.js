const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const { pool } = require('../database')
const urlToTest = 'https://www.google.com/'
const databaseQuery = 'SELECT * FROM search'

describe('JS - Google Database - Test Suite 1', () => {
    let driver
    let results

    beforeAll(async () => {
        try {
            results = await pool.query(databaseQuery)
            driver = getDriver()
        } catch (error) {
            throw new Error('Error in beforeAll : ', error)
        }
    })

    afterEach(async () => {
        if (jasmine.currentTest.failedExpectations.length > 0) {
            const screenshot = await driver.takeScreenshot()
            await allure.attachment('screenshot', Buffer.from(screenshot, 'base64'), 'image/png')
        }
    })

    test('Googling test', async () => {
        for (let i = 0; i < results.rows.length; i++) {
            console.log(`Googling ${results.rows[i].search}`)
            await driver.get(urlToTest)
            const element = await driver.findElement(By.name('q'))
            element.sendKeys(`${results.rows[i].search}`, Key.RETURN)
            await driver.wait(until.elementLocated(By.id('hdtb-msb')), 10000)
            expect(await driver.getTitle()).toEqual(`${results.rows[i].search} - Google Search`)
        }
    })

    afterAll(async () => {
        await driver.quit()
        await pool.end()
    })
})
