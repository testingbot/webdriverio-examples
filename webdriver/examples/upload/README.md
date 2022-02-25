# WebdriverIO running on TestingBot
This project contains an example on how to use WebDriverIO with the TestingBot browser grid.
The test will upload a file (`logo.png`) to the TestingBot VM, making the file available to test file uploads on any browser in the cloud-based TestingBot grid.

During your test, you can send the file path of the uploaded file residing on the TestingBot VM.
Depending on the OS of the TestingBot VM, the file paths can be:
- `Windows`: `C:\test`
- `macOS`: `/tmp`
- `Linux`: `/tmp`

For example, let's say you want to test file upload on a Windows VM running on the TestingBot browser grid:
Add the following capabilities:
```'tb:options': {
        upload: 'https://testingbot.com/assets/logo.png',
        uploadFilepath: 'C:\\test\\logo.png'
    }
```

This will download the logo from the TestingBot website, onto the VM running the browser, saving it in a file called `C:\test\logo.png`.
Once that's done, your test can now input `C:\test\logo.png` during the test in the file upload component.

## Install dependencies
To install all necessary dependencies, please run this command:

    npm install

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/upload` when you run this command.

## Run tests on TestingBot
To start running your tests on TestingBot, please make sure you have set the two necessary environment variables (`TB_KEY` and `TB_SECRET`).
These variables contain your TestingBot key and secret, which you can obtain for free from [TestingBot](https://testingbot.com).

    npm run test.testingbot

## TestingBot Storage
You can use [TestingBot Storage](https://testingbot.com/support/api#upload) to upload the file you want to use in your test scripts.

## More information
More information is available on the [TestingBot WebDriverIO documentation](https://testingbot.com/support/getting-started/webdriverjs.html) pages.