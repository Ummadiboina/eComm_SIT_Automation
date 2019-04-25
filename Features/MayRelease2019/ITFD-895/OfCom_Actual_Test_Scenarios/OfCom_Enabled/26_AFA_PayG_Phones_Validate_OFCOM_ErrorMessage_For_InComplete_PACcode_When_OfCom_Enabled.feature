Feature: 26_AFA_PayG_Phones_Validate_OFCOM_ErrorMessage_For_InComplete_PACcode_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 26_AFA_PayG_Phones_Validate_OFCOM_ErrorMessage_For_InComplete_PACcode_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality

    Examples:
      | Device                        | Tariffs | BSCstatus | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | pacStackRetainCheck |
      | iPhone 8 Plus 64GB Space Grey | Refresh | Disabled  | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | AFA     | Enabled     | Yes          | 07412321621    | XCR66182    |                     |
