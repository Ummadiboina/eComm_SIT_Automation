Feature: Reg_CS_CFU_SavedBasket

  #@ConsumerShop
  Scenario Outline: CFU to Verify is user can upgrade phone to refresh Tariff
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    Then Verifies the Upgrade page is displayed
    And Logout from shop

    Examples: 
      | username   | password |
      | ins_nov746 | test123  |
