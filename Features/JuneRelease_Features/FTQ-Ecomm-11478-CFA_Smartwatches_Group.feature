Feature: FTQ-Ecomm-11478-CFA_MultipleDevices

  @eComm11478_CFA_MultipleDevices
  Scenario Outline: CFA Multiple Accessories/Smarwatches of Same type/Model
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available "Random" Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page
    Then Verify that correct quantity of devices are displayed in Basket page
    And click on "go to checkout" button
    Then Verify that correct quantity of devices are displayed in Delivery page
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    Then Verify that correct quantity of devices are displayed in Review page
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     |
      | TEST      | ACCEPTA | TEST ACCEPTA |