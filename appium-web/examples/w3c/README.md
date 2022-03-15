# WebdriverIO running a W3C Mobile test on TestingBot
This project contains an example on how to use WebDriverIO for running iOS and Android tests on TestingBot, in W3C mode.

## Install dependencies
To install all necessary dependencies, please run this command:

    npm install

> NOTE: Make sure you are in the folder `webdriverio/appium-web/examples/w3c` when you run this command.

## W3C Capabilities
W3C capabilities are the recommend way to send capabilities to a Selenium/Appium endpoint.
You can find the capabilities for this example in the [test/configs/wdio.testingbot.conf.js](./test/configs/wdio.testingbot.conf.js) file.
For [TestingBot Capabilities](https://testingbot.com/support/other/test-options), you need to use a vendor prefix: `tb:options`
Similarly, for Appium you need to use `appium:{capability-name}`

## Run tests on TestingBot
To start running your tests on TestingBot, please make sure you have set the two necessary environment variables (`TB_KEY` and `TB_SECRET`).
These variables contain your TestingBot Key and Secret, which you can obtain for free from [TestingBot](https://testingbot.com).

    npm run test.testingbot

## Run tests locally
You can also run the same test on your local machine. By default, this will open an Android Emulator (defined as `Pixel 3`) and an iOS simulator (`iPhone 11` with `iOS 14.2`).

    npm run test.local

## More information
More information is available on the [TestingBot WebDriverIO documentation](https://testingbot.com/support/mobile/webdriverio.html) pages.