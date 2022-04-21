const { Builder, Capabilities } = require('selenium-webdriver')
const seleniumHubServer = "https://selenium.wap-test-platform-iks-086d0feb796ce72f6b820703a879a158-0000.eu-de.containers.appdomain.cloud"
const browser = 'firefox'

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
