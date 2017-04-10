Feature: Sim Only PayM 12Months E2E validation

  @smokeTest
  Scenario Outline: Sim Only PayM 12Months E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And select either of <Months> PayM sim only Tariff
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose Click and collect option
    And click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    
    Examples: 
    |Months|
    |12 Months|
    |30 Days|