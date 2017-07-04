Feature: UpgradeUpsellPromoModule_testcase_1

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
  @Upgrade_Upsell_Promo_Module
  Scenario Outline: Promo tiles for customers not eligible for upgrade
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    Then I should be displayed the promo modules
    And I should be displayed with Go to My O2 CTA and on clicking on it should land me to My O2 page

    Examples: 
      | username   | password |
      | ing_jul987 | test123  |
