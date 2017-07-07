Feature: C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override

  @JulyRelease
  Scenario Outline: 
    Existing custo add Standalone Accessory Fitnesstracker to basket later add SIMO phone to basket no override

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to Accessories
    And Select <accessoryname> from accessories
    And click on Add to Basket button
    And Verify the device <accessoryname> in basket
    And click on continue shopping button
    And Navigate to Fitness Trackers
    And I choose <fitnesstrackername> FitnessTracker
    And click on Add to Basket button
    And Verify the device <fitnesstrackername> in basket
    And click on continue shopping button
    And navigate to PAYM SIMO page
    And verify the elements
    And choose <contract> contract length
    Then Verify the devices <accessoryname>, <fitnesstrackername> and "Your Tariff" in basket

    Examples: 
      | username    | password | user         | accessoryname   | fitnesstrackername | tabletname     | contract  |
      | ink_jun9198 | test123  | TEST ACCEPTA | Samsung Gear S2 | Fitbit Alta        | Apple iPad 9.7 | 12 Months |