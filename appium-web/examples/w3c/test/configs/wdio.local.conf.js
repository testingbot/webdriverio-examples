exports.config = {

	/**
	 * specify test files
	 */
	specs: [
		'./test/runner-specs/mocha.test.js'
	],

	/**
	 * capabilities
	 */
	capabilities: [{
		browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
            ],
        },
	}],

	/**
	 * test configurations
	 */
	logLevel: 'silent',
	coloredLogs: true,
	screenshotPath: 'screenshots',
	waitforTimeout: 10000,
	framework: 'mocha',
	services: [
	  ['chromedriver']
	],

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	mochaOpts: {
		ui: 'bdd'
	}
}
