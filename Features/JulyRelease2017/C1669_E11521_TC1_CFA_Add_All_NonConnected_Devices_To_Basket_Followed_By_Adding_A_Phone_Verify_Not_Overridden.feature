Feature: C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden

  Scenario Outline: CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device and Veiryf Basket not overridden
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And I click on Continue Shopping link
    And Navigate to Fitness Trackers
    And select any available "Random" Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And I click on Continue Shopping link
    And Navigate to SmartWatches
    And select any available "Random" Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And Verify all three non connected devices got added to the basket section before selecting connected device
    And I click on Continue Shopping link
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Verify all three non connected devices are still retained in the basket and not overridden
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | handset | Firstname | Surname | Username     |
      | Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA |
