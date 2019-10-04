Feature: 19_AFU_Phone_Mid_Tariff_And_3M_LeKiosk

  #launch hooks and get browser
  @Web
  Scenario Outline: 19_AFU_Phone_Mid_Tariff_And_3M_LeKiosk
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select a valid perk associated tariff <tariffTerm> <tariffAmt> and <dataValue>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And select a valid Handset and Tariff combination
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Validate all the Basket content and checkout
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device                      | tariffTerm | tariffAmt | dataValue | perk                                   | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | 07521155211 | Galaxy S10 Plus Prism White | 30D        | £25       | 5GB       | B:CR7682:Amazon:12M:UnlimitedMusic:FOC | giftPerk | AFU     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | Phone        |
