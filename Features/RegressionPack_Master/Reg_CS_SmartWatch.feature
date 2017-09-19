Feature: Reg_CS_SmartWatch

  @ConsumerShop
  Scenario Outline: Smart Watches only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available <Device> Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     | Device                    |
      | TEST      | ACCEPTA | TEST ACCEPTA | Pebble Original Jet Black |
