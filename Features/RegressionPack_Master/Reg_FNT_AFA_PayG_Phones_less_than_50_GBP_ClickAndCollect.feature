Feature: Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect

  #launch hooks and get browser
  @Web
  Scenario Outline: This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a PAYG <Device> device in stock
    And Select valid <Tariffs> from PAYG tariffs tab less than 50 GBP
    And Confirm Device and Tariff are added in Deal Builder
    And Select a valid store using <PostCode> for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples: 
      | Device  | Tariffs | Firstname | Surname | HouseNumber | PostCode |
      | In stock| 50  | TEST      | ACCEPTA |             |     g2     |
