Feature: 27_AFA_PayM_SIMO_Validate_OFCOM_ErrorMessage_For_InComplete_STACcode_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 27_AFA_PayM_SIMO_Validate_OFCOM_ErrorMessage_For_InComplete_STACcode_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid simo tariff <Tariffs> from simo tariffs tab
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
      | Tariffs         | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStackRetainCheck | pacStacCode | Password | confirmPassword | SecurityAnswer | codeStatus |
      | Standard / Simo | Enabled   | £60           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | SIMO    | Enabled     | Yes          | 07707003589    | Yes                 | 965998XB    | test1234 | test1234        | vinudeep       | InComplete |
