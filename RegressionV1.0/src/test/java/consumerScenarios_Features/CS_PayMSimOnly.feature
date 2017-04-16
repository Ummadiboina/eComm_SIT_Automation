Feature: Sim Only PayM 12Months E2E validation

  @smokeTest
  Scenario Outline: Sim Only PayM 12Months E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Contract  | Firstname | Surname | Username     |
      | 12 Months | TEST      | ACCEPTA | TEST ACCEPTA |
      | 30 Days   |
      
      
      
