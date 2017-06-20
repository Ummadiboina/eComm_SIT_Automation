Feature: FTQ-Ecomm-11478-remove

  @eComm11478_CFA_Remove
  	Scenario: CFA Multiple non connected Remove and verify correct display
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available "Random" Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page
    Then Verify that correct quantity of devices are displayed in Basket page
    And click on "go to checkout" button
    Then Verify that correct quantity of devices are displayed in Delivery page
    And navigate back to Basket page
    And Change the quantity of the items
    And click on "go to checkout" button
   Then Verify that correct quantity of devices are displayed in Delivery page after update