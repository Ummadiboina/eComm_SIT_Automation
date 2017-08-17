Feature: C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override

  @JulyRelease1669TC4
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
    And Verify the devices <accessoryname> and <fitnesstrackername> in basket
    And click on continue shopping button
    And navigate to PAYM SIMO page
    And verify the elements
    And choose <contract> contract length
    Then Verify the devices <accessoryname>, <fitnesstrackername> and <Your_Tariff> in the basket

    Examples: 
      | username   | password | user         | accessoryname    | fitnesstrackername | contract | Your_Tariff |
      | testp@gmail.com | test123  | TEST ACCEPTA | JBL Clip 2 | Fitbit Alta | 30 days  | Your Tariff |
