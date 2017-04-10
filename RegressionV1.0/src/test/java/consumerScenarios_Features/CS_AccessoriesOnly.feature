Feature: Accessories only E2E journey

 @smokeTest10392
  Scenario: Accessories only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And I Less than 6 Accessories
    And I Land on the basket page and click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the Non Credit check payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed