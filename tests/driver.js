const { Builder, Capabilities } = require('selenium-webdriver')
//const seleniumHubServer = 'https://selenium.rexel.moin.plus/wd/hub'
const seleniumHubServer = process.env.SELENIUM_HUB
const browser = process.env.BROWSER

const getDriver = () => {
    switch (browser) {
        case 'chrome':
            console.log('Browser :', browser)
            const chromeDriver = new Builder().usingServer(seleniumHubServer).withCapabilities(Capabilities.chrome()).build()
            return chromeDriver
        case 'firefox':
            console.log('Browser :', browser)
            const firefoxDriver = new Builder().usingServer(seleniumHubServer).withCapabilities(Capabilities.firefox()).build()
            return firefoxDriver
        default:
            console.log('Browser (default) :', browser)
            const defaultDriver = new Builder().usingServer(seleniumHubServer).withCapabilities(Capabilities.chrome()).build()
            return defaultDriver
    }
}

module.exports = { getDriver }
