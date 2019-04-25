Feature: 57_AFA_Tablets_Validate_OFCOM_With_Locked_STAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 57_AFA_Tablets_Validate_OFCOM_With_Locked_STAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
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
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And Validate ofCom error text for <codeStatus> if exist in Agent channel

    Examples:
      | Device                              | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | pacStackRetainCheck | confirmPassword | Password | SecurityAnswer | codeStatus | codeVariant |
      | iPad Pro 10.5 inch 256GB Space Grey | Refresh | Enabled   | £100          | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | AFA     | Enabled     | Yes          | 07412321621    | XCR66182    | Yes                 | test1234        | test1234 | vinudeep       | Locked     | STAC        |
