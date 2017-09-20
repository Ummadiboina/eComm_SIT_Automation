Feature: Reg_CS_OrderingTabletSim

 # @ConsumerShop
  Scenario Outline: Tablet SimO Only PAYG E2E validation
    Given I am an CFA user and Lands on shop page
    And Navigate to sims and Tablet Sims page
    And select any Tablet "Random Tariff" and continue
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     |
      | TEST      | ACCEPTA | TEST ACCEPTA |
