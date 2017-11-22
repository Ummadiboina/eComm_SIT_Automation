Feature: Reg_AFU_PAYM_Dongle_SubmitOrder

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M dongle Acqusistion Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples: 
      | user        | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | HouseNumber | PostCode | Username     |
      | 07521009401 | dongle | Random  | Random | HomeDelivery | Test      | Accepta |          12 | SL11UP   | Test Accepta |
