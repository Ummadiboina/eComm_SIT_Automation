Feature: Reg_CS_CFU_SavedBasket

  @Web
  Scenario Outline: CFU to Verify is user can upgrade phone to refresh Tariff
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Select any new Tariff and land on basket page
    And Verifies the basket page for the upgrade journey

    Examples:
      | username         | password |
      | test123@te.so.is | test123  |
