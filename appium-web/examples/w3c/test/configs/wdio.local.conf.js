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
	    'appium:deviceName': 'Pixel 3',
	    'appium:platformVersion': '10',
	    // For the W3C capabilities, please check
	    // https://www.w3.org/TR/webdriver1/#capabilities
	    browserName: 'chrome',
	    platformName: 'Android',
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
	    'appium:deviceName': 'iPhone 11',
	    'appium:platformVersion': '14.2',
	    // For the W3C capabilities, please check
	    // https://www.w3.org/TR/webdriver1/#capabilities
	    browserName: 'safari',
	    platformName: 'iOS',
	  },
	],

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
