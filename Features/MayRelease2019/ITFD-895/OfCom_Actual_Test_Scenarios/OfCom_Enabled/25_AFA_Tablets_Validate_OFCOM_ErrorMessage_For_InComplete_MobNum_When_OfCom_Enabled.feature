Feature: 25_AFA_Tablets_Validate_OFCOM_ErrorMessage_For_InComplete_MobNum_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 25_AFA_Tablets_Validate_OFCOM_ErrorMessage_For_InComplete_MobNum_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality


    Examples:
      | Device                              | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | pacStackRetainCheck | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode |
      | iPad Pro 10.5 inch 256GB Space Grey | Refresh | Enabled   | £60           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   |                     | AFA     | Enabled     | Yes          | 07412321       | XCR661826   |
