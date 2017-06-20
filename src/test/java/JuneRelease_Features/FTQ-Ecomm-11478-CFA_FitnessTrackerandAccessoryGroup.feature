Feature: FTQ-Ecomm-11478-CFAMultipleFitnesTrackers-and-Accessories

  @eComm11478_CFA_MultipleAccessoriesFitnessTrackers
  	Scenario Outline: CFA Multiple Accessories and Fitness Trackers Smarwatches of Same type/Model
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And Navigate to Fitness Trackers
    And select any available "Random" Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page
    Then Verify that correct quantity of Grouped non connected items are displayed in Basket page
    And click on "go to checkout" button
    Then Verify that correct quantity of Grouped non connected items are displayed in Delivery page
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    Then Verify that correct quantity of Grouped non connected items are displayed in Review page
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     |
      | TEST      | ACCEPTA | TEST ACCEPTA |