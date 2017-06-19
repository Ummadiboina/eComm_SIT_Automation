Feature: FTQ-Ecomm-11478-CFU_MultipleDevices

  @eComm11478_CFU_MultipleDevices
  Scenario Outline: CFU to validate multiple accessories
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page
    Then Verify that correct quantity of devices are displayed in Basket page
    And click on "go to checkout" button
    Then Verify that correct quantity of devices are displayed in Delivery page
    
    Examples: 
      | username    | password | Firstname | Surname | Username     |
      | ink_jun9198 | test123  | TEST      | ACCEPTA | TEST ACCEPTA |
