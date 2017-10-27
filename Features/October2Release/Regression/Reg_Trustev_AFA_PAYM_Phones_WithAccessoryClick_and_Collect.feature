Feature: Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect

  #launch hooks and get browser
  @AgentsRegression @Web
  Scenario Outline: Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    #And Select <Accessory> from Accessories tab
    And select a valid Handset and Tariff combination
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Question>, <Security_Answer> in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device | Tariffs | Firstname | Surname | Username     | Password | Confirm_Password | Security_Question | Security_Answer | HouseNumber | PostCode |
      | tablet | Random  | TEST      | ACCEPTA | TEST ACCEPTA | test123  | test123          | Memorable name    | Anything        | 14          | SL11UP   |
