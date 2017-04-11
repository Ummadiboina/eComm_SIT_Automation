Feature: Smart Watches only E2E journey

 @smokeTest
  Scenario: Smart Watches only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Smart Watches section
    And select any available Smart Watches
    And I Land on the basket page and choose home delivery option 
    And click on "go to checkout" button
    And I land on the Non Credit check payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed