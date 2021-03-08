const { By, Key, until } = require('selenium-webdriver')
const urlToTest = 'https://www.rexel.fr/frx/'

describe('Rexel search test scenario', () => {
    let driver

    beforeAll(async () => {
        driver = getDriver()
        await driver.get(urlToTest)
        const acceptButton = await driver.findElement(By.id('acceptAllConsentSummary'))
        acceptButton.click()
    })

    test('Searching "coffret" in the searchBar', async () => {
        await driver.get(urlToTest)
        const searchBar = await driver.findElement(By.id('search'))
        searchBar.sendKeys('coffret', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('mm-1')), 10000)
        expect(await driver.getTitle()).toEqual('Recherche coffret | Rexel France')
    })

    test('Searching "Coffret" in the searchBar', async () => {
        await driver.get(urlToTest)
        const searchBar = await driver.findElement(By.id('search'))
        searchBar.sendKeys('Coffret', Key.RETURN)
        await driver.wait(until.elementLocated(By.id('mm-1')), 10000)
        expect(await driver.getTitle()).toEqual('Recherche Coffret | Rexel France')
    })

    afterAll(async () => {
        await driver.quit()
    })
})
