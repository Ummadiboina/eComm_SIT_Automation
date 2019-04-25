Feature: 18_AFU_MBB_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 18_AFU_MBB_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | user        | Device | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | DeviceType | PreSelected | ofComStatus | journey | pacStacCheck | codeStatus | codeVariant | ofComMobileNum |
      | 07521116879 | dongle | Random  | Enabled   | £100          | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | Connected  | No          | Enabled     | MBB     | Nill         | Nill       | Nill        | Nill           |