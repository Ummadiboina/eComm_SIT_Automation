Feature: 11_AFU_PayM_Tablets_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B3_CP_Text

  #launch hooks and get browser
  @Web
  Scenario Outline: 11_AFU_PayM_Tablets_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B3_CP_Text
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device                              | Tariffs | BSCstatus | BillCapAmount | consumer | B1  | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 07568414065 | iPad Pro 10.5 inch 256GB Space Grey | Refresh | Enabled   | £200          | Me       | Not | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | Yes         |