Feature: FNT CFA PayM Phones Click and collect scenario with E2E journey

  @FNTRegression
  Scenario Outline: FNT CFA PayM Phones Click and collect scenario with E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
   And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | handset  | Firstname | Surname | Username     |
      | GalaxyS7 | TEST      | ACCEPTA | TEST ACCEPTA |
