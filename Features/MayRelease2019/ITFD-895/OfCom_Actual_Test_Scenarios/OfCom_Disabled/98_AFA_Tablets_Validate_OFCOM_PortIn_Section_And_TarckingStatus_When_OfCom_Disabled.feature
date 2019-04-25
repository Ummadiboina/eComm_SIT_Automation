Feature: 98_AFA_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 98_AFA_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled
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
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page


    Examples:
      | Device                              | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | journey | ofComStatus |
      | iPad Pro 10.5 inch 256GB Space Grey | Refresh | Enabled   | £60           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | AFA     | Disabled    |
