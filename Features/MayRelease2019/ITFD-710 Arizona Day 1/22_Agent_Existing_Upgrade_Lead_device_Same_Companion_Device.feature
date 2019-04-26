Feature: Agent_Existing_Upgrade_Lead_device_Same_Companion_Device

Scenario Outline: Agent_Existing_Upgrade_Lead_device_Same_Companion_Device
  Given I login to Agent shop
    #And performs Acquisition for New user
  And performs Upgrade for <user>
  And Select a valid PayM <Device>
  And Select valid <Tariffs> from tariffs tab
  And select a valid Handset and Tariff combination
  And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
  Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
  And Validate all the Basket content and checkout
  And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
  Then perform all the advisory checks
  When Pay by card
  Then Order confirmation message should be displayed
  Examples:
    | user        | Device | Tariffs | BSCstatus |  consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | BillCapAmount | DeviceType | PreSelected |
    | 07568414065 |        | Refresh | Enabled   |  Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | £20            | Connected  | Yes         |


