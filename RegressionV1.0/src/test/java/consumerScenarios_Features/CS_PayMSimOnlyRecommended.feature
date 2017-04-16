Feature: Sim Only PayM Recommended Tariff selection E2E validation

  @smokeTest
  Scenario Outline: Sim Only PayM Recommended Tariff selection E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select "Recommended" Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Contract  |
      | 12 Months |