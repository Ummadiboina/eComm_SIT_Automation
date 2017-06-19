Feature: Basecomms page for iPad tab

@BasecommsPageVal_1
Scenario Outline: Basecomms page iPad 
Given I am an Existing user and Navigates to Signin page
And Signin using valid <username> and <password> credentials
Then when I land on the my offers url I should be displayed with the header carousal on top of the page
And the static sub navigation should be displayed on the top of the page above the header carousel
And the description for sub banner is displayed below the header carousal
Then the Footer banner should be displayed below the tariff tiles

     Examples: 
      | username    | password |
      | ink_jun9198 | test123  |