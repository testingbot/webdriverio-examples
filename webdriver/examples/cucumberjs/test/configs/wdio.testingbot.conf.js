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
		browserVersion: 'latest',
		platformName: 'WIN10'
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
	  ['testingbot']
	],
	user: process.env.TB_KEY,
    key: process.env.TB_SECRET,

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	cucumberOpts: {
		require: ['./test/step-definitions/**/*.step-definitions.js'],
	}
}
