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
	capabilities: [
	  /**
	   * Android
	   */
	  {
	    // All vendor specific, in this case Appium capabilities, should be
	    // put in vendor prefixed options, see
	    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
	    // All Appium capabilities, see
	    // http://appium.io/docs/en/writing-running-appium/caps/
	    // should be prefixed with `appium:{capability-name}`
	    'appium:deviceName': 'Pixel 8',
	    'appium:platformVersion': '14',
	    // For the W3C capabilities, please check
	    // https://www.w3.org/TR/webdriver1/#capabilities
	    browserName: 'chrome',
	    platformName: 'Android',
	    // All vendor specific, in this case TestingBot specific capabilities, should be
	    // put in vendor prefixed options, see
	    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
	    'tb:options': {
	      build: `TestingBot W3C Mobile Web build-${new Date().getTime()}`
	    },
	  },
	  /**
	   * iOS
	   */
	  {
	    // All vendor specific, in this case Appium capabilities, should be
	    // put in vendor prefixed options, see
	    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
	    // All Appium capabilities, see
	    // http://appium.io/docs/en/writing-running-appium/caps/
	    // should be prefixed with `appium:{capability-name}`
	    'appium:deviceName': 'iPhone 15',
	    'appium:platformVersion': '17.2',
	    // For the W3C capabilities, please check
	    // https://www.w3.org/TR/webdriver1/#capabilities
	    browserName: 'safari',
	    platformName: 'iOS',
	    // All vendor specific, in this case TestingBot specific capabilities, should be
	    // put in vendor prefixed options, see
	    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
	    'tb:options': {
	      build: `TestingBot W3C Mobile Web build-${new Date().getTime()}`
	    },
	  },
	],

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
