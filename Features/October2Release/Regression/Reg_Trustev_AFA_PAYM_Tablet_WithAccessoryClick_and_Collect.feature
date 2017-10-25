Feature: Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect

  @Trustev_Regression @Web
  Scenario Outline: Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Select a valid Accessory <Accessory>
    And select a valid Handset and Tariff combination
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    Then perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Answer> in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples: 
      | Device | Tariffs | Accessory                        | Firstname | Surname | HouseNumber | PostCode | Username     | Password | Confirm_Password | Security_Answer |
      | tablet | Random  | iPhone 7 Evo Elite Brushed Black | TEST      | ACCEPTA |          32 | SL11ER   | TEST ACCEPTA | test123  | test123          | Anything        |
