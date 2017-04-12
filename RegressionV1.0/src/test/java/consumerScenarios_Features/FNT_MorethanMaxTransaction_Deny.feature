Feature: CFA PayM Phones Click and collect scenario with E2E journey

  @smokeTest1
  Scenario: CFA PayM Phones Click and collect scenario with E2E journey
Given I am an CFA user and Lands on shop page
  And navigate to PAYM Phones page
    And I choose high value PayM handset
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page selecting pay device in full
    And I Land on the basket page and choose to collect from store 
    And click on "go to checkout" button
    And input all the fields on the Delivery page for Click and collect and Click order on the 'Continue button'
    And I land on the payment page and input all the details for high value Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed