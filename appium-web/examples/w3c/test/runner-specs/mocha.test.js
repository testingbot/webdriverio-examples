const assert = require('assert')
describe('TestingBot homepage', function() {
	it('should have the right title', async function () {
		await browser.url('https://testingbot.com')
		const title = await browser.getTitle()
		assert.ok(title.includes('TestingBot'), `unexpected title: ${title}`)
	})
})
