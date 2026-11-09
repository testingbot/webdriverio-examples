Feature: Example feature
As a visitor of TestingBot
I should be able to go to TestingBot and see its correct title

Scenario: Get title of website
Given I go on the website "https://testingbot.com/"
Then the title of the page should contain "TestingBot"
