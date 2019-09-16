Feature: 24_AFA_Phones_Validate_OFCOM_ErrorMessage_For_Null_Values_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 24_AFA_Phones_Validate_OFCOM_ErrorMessage_For_Null_Values_When_OfCom_Enabled
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
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And Validate OFCOM error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist in agent journey

    Examples:
      | Device       | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | pacStackRetainCheck | Password | confirmPassword | SecurityAnswer | codeStatus |
      | Galaxy Note9 | Refresh | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | AFA     | Enabled     | Yes          |                |             |                     | test1234 | test1234        | vinudeep       | Null       |
