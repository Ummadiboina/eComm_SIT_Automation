Feature: 25_AFA_PayG_Tablets_Validate_OFCOM_Section

  #launch hooks and get browser
  @Web
  Scenario Outline: 25_AFA_PayG_Tablets_Validate_OFCOM_Section
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the OFCOM PayG customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Register CTA to register OFCOM PayG Customer


    Examples:
      | Device                              | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | pacStackRetainCheck | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | Password | confirmPassword | SecurityAnswer | codeStatus |
      | iPad Pro 10.5 inch 256GB Space Grey | Random  | Disabled  | £60           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   |                     | Tablet  | Enabled     | Yes          | 07412321       | XCR661826   | test1234 | test1234        | vinudeep       | InComplete |
