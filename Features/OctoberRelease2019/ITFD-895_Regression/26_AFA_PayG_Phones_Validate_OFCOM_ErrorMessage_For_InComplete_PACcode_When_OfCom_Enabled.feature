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
    And Register the OFCOM PayG customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Register CTA to register OFCOM PayG Customer
    And Validate OFCOM error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist in agent journey

    Examples:
      | Device                              | Tariffs | BSCstatus | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | pacStackRetainCheck | Password | confirmPassword | SecurityAnswer | codeStatus |
      | Galaxy S9 Plus 128GB Midnight Black | Random  | Disabled  | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | AFA     | Enabled     | Yes          | 07707003810    | XBA86876    | Yes                 | test1234 | test1234        | vinudeep       | InComplete |
