
Feature: Like New Sim free with PAYM Sim E2E order placement

 @smokeTest10392
  Scenario: Like New Sim free with PAYM Sim E2E order placement
    Given I am an CFA user and Lands on shop page
    And Navigate to Like New Page
    And I choose 'like new' sim free device with PayG Sim
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the Non Credit check payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed