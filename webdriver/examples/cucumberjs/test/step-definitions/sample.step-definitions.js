const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

Given('I go on the website {string}', async (url) => {
    await browser.url(url)
})

Then('should the title of the page be {string}', async (expectedTitle) => {
    assert.equal(await browser.getTitle(), expectedTitle)
})
