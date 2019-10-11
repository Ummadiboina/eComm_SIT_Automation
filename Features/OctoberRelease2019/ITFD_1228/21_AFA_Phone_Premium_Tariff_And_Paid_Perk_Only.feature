Feature: 21_AFA_Phone_Premium_Tariff_And_Paid_Perk_Only

  #launch hooks and get browser
  @Web
  Scenario Outline: 21_AFA_Phone_Premium_Tariff_And_Paid_Perk_Only
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid perk associated tariff <tariffTerm> <tariffAmt> and <dataValue>
    And Select a valid PayM <Device>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And select a valid Handset and Tariff combination
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Validate all the Basket content and checkout
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And validate register status
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device | Extras | tariffTerm | tariffAmt | dataValue | perk                               | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | Random | Perk   | 30D        | £27       | 30GB      | Amazon Prime Video Auto-enrol perk | paidPerk | AFA     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
