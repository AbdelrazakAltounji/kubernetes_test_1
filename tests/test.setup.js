const { JasmineAllureReporter } = require('allure-jasmine')
const { AllureRuntime } = require('allure-js-commons')
const TIMEOUT = 360000

const reporter = new JasmineAllureReporter(
    new AllureRuntime({
        resultsDir: 'allure-results',
    })
)

jasmine.getEnv().addReporter(reporter)
jasmine.getEnv().addReporter({
    specStarted: (result) => (jasmine.currentTest = result),
})
jest.setTimeout(TIMEOUT)
global.allure = reporter.getInterface()
