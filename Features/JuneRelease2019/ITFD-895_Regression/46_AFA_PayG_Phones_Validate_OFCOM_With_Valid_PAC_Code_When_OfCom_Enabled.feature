Feature: 46_AFA_PayG_Phones_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 46_AFA_PayG_Phones_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Select a valid Accessory <Accessory>
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the OFCOM PayG customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Register CTA to register OFCOM PayG Customer
    And Validate OFCOM error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist in agent journey
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Device                        | Tariffs | Accessory | BSCstatus | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | journey | ofComStatus | pacStacCheck | ofComMobileNum | pacStacCode | pacStackRetainCheck | confirmPassword | Password | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | DeviceType | DeviceModule | codeStatus | codeVariant |
      | iPhone 8 Plus 64GB Space Grey | Random  | Random    | Disabled  | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Phones  | Enabled     | Yes          | 07412321741    | XCR047015   | Yes                 | test1234        | test1234 | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | Connected  | Phone        | valid      | PAC         |
