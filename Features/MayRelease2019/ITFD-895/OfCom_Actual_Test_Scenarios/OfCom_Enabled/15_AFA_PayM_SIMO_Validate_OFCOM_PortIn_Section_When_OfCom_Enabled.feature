Feature: 15_AFA_PayM_SIMO_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 15_AFA_PayM_SIMO_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid simo tariff <Tariffs> from simo tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Tariffs         | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | journey | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant |
      | Standard / Simo | HomeDelivery | Enabled   | £60           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | SIMO    | Connected  | Phone        | Enabled     | Not          | Nill           | Nill       | Nill        |
