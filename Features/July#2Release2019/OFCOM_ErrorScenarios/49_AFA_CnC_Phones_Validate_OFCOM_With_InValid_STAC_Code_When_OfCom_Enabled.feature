Feature: 49_AFA_CnC_Phones_Validate_OFCOM_With_InValid_STAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 49_AFA_CnC_Phones_Validate_OFCOM_With_InValid_STAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And Validate OFCOM error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist in agent journey


    Examples:
      | Device                  | Tariffs | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | journey | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant | pacStacCode | pacStackRetainCheck |
      | Huawei P20 Pro Twilight | Refresh | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | AFA     | Connected  | Phone        | Enabled     | Yes          | 07707003696    | Invalid    | STAC        | 708841XBA   | Yes                 |