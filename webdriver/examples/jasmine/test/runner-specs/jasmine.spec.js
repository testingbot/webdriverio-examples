const assert = require('assert')
describe('google page', function() {
	it('should have the right title', async function () {
		await browser.url('https://www.google.com')
		const title = await browser.getTitle()
		assert.equal(title, 'Google')
	})
})