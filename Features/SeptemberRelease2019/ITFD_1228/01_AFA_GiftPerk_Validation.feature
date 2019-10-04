Feature: 01_AFA_GiftPerk_Validation

  #launch hooks and get browser
  @Web
  Scenario Outline: 01_AFA_GiftPerk_Validation
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select a valid perk associated tariff <tariffAmt> and <dataValue>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And select a valid Handset and Tariff combination
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device                       | tariffAmt | dataValue | perk   | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone 7 Plus 32GB Rose Gold | £31       | 30GB      | Random | giftPerk | AFA     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
