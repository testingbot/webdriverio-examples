const assert = require('assert')
describe('upload a file', async function() {
	it('should be able to upload a file', async function () {
		await browser.url('http://the-internet.herokuapp.com/upload')

		const uploadField = await $('#file-upload')
		await uploadField.setValue('C:\\test\\logo.png')

		const uploadButton = await $('#file-submit')
		uploadButton.click()

		await browser.waitUntil(async () => (await $('#uploaded-files').getText()) === 'logo.png', {
            timeout: 5000,
            timeoutMsg: 'expected file to be uploaded after 5s'
        })
	})
})