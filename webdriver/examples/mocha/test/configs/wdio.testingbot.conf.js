exports.config = {

	/**
	 * specify test files
	 */
	specs: [
		'./../runner-specs/mocha.test.js'
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
	framework: 'mocha',
	services: [
	  ['testingbot']
	],
	user: process.env.TB_KEY,
    key: process.env.TB_SECRET,

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	mochaOpts: {
		ui: 'bdd'
	}
}
