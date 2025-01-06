exports.config = {

	/**
	 * specify test files
	 */
	specs: [
		'./../runner-specs/jasmine.spec.js'
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
	framework: 'jasmine',
	services: [
	  ['chromedriver']
	],

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 9999999
	}
}
