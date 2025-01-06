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
		platformName: 'WIN10',
		'tb:options': {
			upload: 'https://testingbot.com/assets/logo.png',
			uploadFilepath: 'C:\\test\\logo.png'
		}
	}],

	/**
	 * test configurations
	 */
	logLevel: 'debug',
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
