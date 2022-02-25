# WebdriverIO with CucumberJS running on TestingBot
This project contains an example on how to use WebDriverIO with CucumberJS on the TestingBot browser grid.

## Install dependencies
To install all necessary dependencies, please run this command:

    npm install

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/cucumberjs` when you run this command.

## Run tests on TestingBot
To start running your tests on TestingBot, please make sure you have set the two necessary environment variables (`TB_KEY` and `TB_SECRET`).
These variables contain your TestingBot Key and Secret, which you can obtain for free from [TestingBot](https://testingbot.com).

    npm run test.testingbot

## Run tests locally
You can also run the same test on your local machine. By default, this will open a Chrome browser and run the test.

    npm run test.local

## More information
More information is available on the [TestingBot WebDriverIO documentation](https://testingbot.com/support/getting-started/webdriverjs.html) pages.