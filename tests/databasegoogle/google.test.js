const { By, Key, until } = require('selenium-webdriver')
const { getDriver } = require('../driver')
const { pool } = require('../database')
const urlToTest = 'https://www.google.com/'
const databaseQuery = 'SELECT * FROM search'

describe('1. Google search test scenario', () => {
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
