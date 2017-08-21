Feature: Reg_CS_CFU_SavedBasket

  #CFU Saved Basket Feature Validation - This feature is not automated due to presence of Captcha
  # @smokeTesthomedelivery
  #Scenario Outline: CFU Saved Basket Feature Validation
  # Given I am an Existing user and Navigates to Signin page
  # And Signin using valid <username> and <password> credentials
  # And choose to upgrade any Phone in My upgrade page
  # And Select any Tariff and go to basket
  # And I choose to save the basket
  # And Mail should be recieved
  # And the retrieved mail should match the contents of the Basket
  # Examples:
  #  | username | password |
  # |ink_jun9198|test123|
  @ConsumerShop
  Scenario Outline: CFU to Verify is user can upgrade phone to refresh Tariff
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Select any new Tariff and land on basket page
    And Verifies the basket page for the upgrade journey

    Examples: 
      | username   | password |
      | ins_nov746 | test123  |
