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

    test('True true', async () => {
        expect(true).toBe(true)
    })

    test('True false', async () => {
        expect(true).toBe(false)
    })

    afterAll(async () => {
        allure.step('After all', async () => {
            await driver.quit()
        })
    })
})
