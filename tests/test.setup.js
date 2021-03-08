const { JasmineAllureReporter } = require('allure-jasmine')
const { AllureRuntime } = require('allure-js-commons')
const TIMEOUT = 120000

const reporter = new JasmineAllureReporter(
    new AllureRuntime({
        resultsDir: 'allure-results',
    })
)
jasmine.getEnv().addReporter(reporter)
jest.setTimeout(TIMEOUT)
