Feature: Basecomms page for tablet offers

#@tag1
#Scenario: Basecomms journey
#Given that I am a customer and I land on the offers page o
#Then I should see the Recommended tariffs on the listings page and the banner description below the header carousal
#And I click on see device details link
#Then I should be able to see a snapshot of the technical specifications
#When I click on Sort I should be able to sort
#And on clicking Filter I should be able to filter
#When the customer scrolls down then the static sub navigation should be displayed over the header carousal
#And a footer banner should be displayed below the tariff tiles
#When I click on "Buy Now" and got to Tariff and Extras page
#Then the image of the basecomms device should accordingly reflect to display the selected variant
#And if a promotion is available should be displayed in blue ribbon
#And the recommended tariff should be displayed 
#When I click on Back to iPad offers link
#Then I should be taken back to the basecomms listings page with the device selected
#When I Choose a different variant and click on select "Buy Now"
#Then the same variant should be selected on the tariffs and extras page as well




@BasecommsPageVal
Scenario Outline: Basecomms page header carousal and footer
Given I am an Existing user and Navigates to Signin page
And Signin using valid <username> and <password> credentials
Then when I land on the my offers url I should be displayed with the header carousal on top of the page
And the static sub navigation should be displayed on the top of the page above the header carousel
And the description for sub banner is displayed below the header carousal
Then the Footer banner should be displayed below the tariff tiles

     Examples: 
      | username    | password |
      | ink_jun9198 | test123  |

