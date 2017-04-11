Feature: Fitness Trackers only E2E journey

 @smokeTest
  Scenario: Fitness Trackers only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackess
    And select any available Fitness trackers
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the Non Credit check payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed