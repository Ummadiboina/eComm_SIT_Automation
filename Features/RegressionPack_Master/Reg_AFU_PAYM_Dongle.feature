Feature: Reg_AFU_PAYM_Dongle

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M dongle Acqusistion Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
  #  Then perform all the advisory checks
  #  And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
  #  And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
  #  And Choose <DeliveryType> delivery address and delivery time
    #And Update Device Plan Link Email Address
    #Then CCALink Should be generated
    When Pay by card
    Then Order confirmation message should be displayed

    Examples: 
      | user        | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | HouseNumber | PostCode | Username     |
      | 07521113738 | dongle | Random  | Random | HomeDelivery | Test      | Accepta | Flat 9      | SL11EL   | Test Accepta |
