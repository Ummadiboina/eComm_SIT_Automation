Feature: 100_AFA_PayG_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 100_AFA_PayG_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Device                              | Tariffs | DeliveryType | BSCstatus | Firstname | Surname | HouseNumber | PostCode | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | journey | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant |
      | iPad Pro 10.5 inch 256GB Space Grey | Random  | HomeDelivery | Disabled  | TEST      | ACCEPTA | 14          | SL11UP   | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | Tablet  | Connected  | Tablet       | Disabled    | Not          | Nill           | Nill       | Nill        |
