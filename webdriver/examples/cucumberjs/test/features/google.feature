Feature: Example feature
As a user of Google
I should be able to go to Google and see its correct title

Scenario: Get title of website
Given I go on the website "https://www.google.com/"
Then should the title of the page be "Google"
