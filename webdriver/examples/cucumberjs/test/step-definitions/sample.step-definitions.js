const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

Given('I go on the website {string}', async (url) => {
    await browser.url(url)
})

Then('the title of the page should contain {string}', async (expectedText) => {
    const title = await browser.getTitle()
    assert.ok(title.includes(expectedText), `unexpected title: ${title}`)
})
