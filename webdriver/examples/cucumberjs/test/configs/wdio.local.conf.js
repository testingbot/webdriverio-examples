exports.config = {

	/**
	 * specify test files
	 */
	specs: [
		'./test/features/**/*.feature'
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
	framework: 'cucumber',
	services: [
	  ['chromedriver']
	],

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	cucumberOpts: {
		require: ['./test/step-definitions/**/*.step-definitions.js'],
	}
}
