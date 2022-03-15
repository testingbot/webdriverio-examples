# WebdriverIO running App Automation on TestingBot
This project contains an example on how to use WebDriverIO for running iOS and Android tests on TestingBot, with native mobile apps.

## Install dependencies
To install all necessary dependencies, please run this command:

    npm install

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/app-automation` when you run this command.

## TestingBot Storage
If you are looking to test native or hybrid mobile apps in a cloud environment, you will need to upload the `.apk` or `.ipa` file to the internet.
TestingBot allows you to upload your `.apk` or `.ipa` files to TestingBot storage, which keeps your app assets for up to 31 days.

More information is available on [the TestingBot API docs](https://testingbot.com/support/api#upload).


## Run tests on TestingBot
To start running your tests on TestingBot, please make sure you have set the two necessary environment variables (`TB_KEY` and `TB_SECRET`).
These variables contain your TestingBot Key and Secret, which you can obtain for free from [TestingBot](https://testingbot.com).

    npm run test.testingbot

## Run tests locally
You can also run the same test on your local machine. By default, this will open an Android Emulator (defined as `Pixel 3`) and an iOS simulator (`iPhone 11` with `iOS 14.2`).
The test will open the app, perform some actions and close the app.

    npm run test.local

## More information
More information is available on the [TestingBot WebDriverIO documentation](https://testingbot.com/support/mobile/webdriverio.html) pages.