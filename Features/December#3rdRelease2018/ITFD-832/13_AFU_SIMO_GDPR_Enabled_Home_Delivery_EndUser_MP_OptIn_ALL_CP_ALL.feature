Feature: 13_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_MP_OptIn_ALL_CP_ALL

  #launch hooks and get browser
  @Web
  Scenario Outline: 13_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_MP_OptIn_ALL_CP_ALL
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType | PreSelected |
      | 07568414065 | Simo    | Enabled   | £200          | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  | Yes         |