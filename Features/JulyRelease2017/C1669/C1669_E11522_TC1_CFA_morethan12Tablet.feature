Feature: C1669_E11522_TC1_CFA_morethan12Tablet

  @C1169_E11522_TC1
  Scenario Outline: E11522_CFA_MoreThan12Accessory_Tablet
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add quantity of accessories to basket within <limit> in details page and navigate to basket
    And Navigate to Fitness Trackers
    And select any available "Random" Fitness tracker
    And add quantity of FitnessTracker to basket within <limit> in details page and navigate to basket
    #And Validate Basket content for non Connected
    And Verify all non connected devices got added to the basket section before selecting connected device
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Choose all Accesssory
    And I Land on the basket page and choose home delivery option
    And the previously selected standalone non-connected items should be removed from my basket
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     | limit | tabletname     |
      | TEST      | ACCEPTA | TEST ACCEPTA |     6 | Apple iPad 9.7 |
