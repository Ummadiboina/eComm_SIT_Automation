Feature: 19_Agent_Existing_CCA_Tablets_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_B1B3_CP_Text

  This scenario ensures that when the BSC flag is off the agent SHOULD not be presented with 'Bill spend caps' section
  when the agent is on an acquisition journey for an existing customer

  #launch hooks and get browser
  @Web
  Scenario Outline: 19_Agent_Existing_CCA_Tablets_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_B1B3_CP_Text
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks_new
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials

    Examples:
      | user        | Device                              | username      | password | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 07568414065 | iPad Pro 10.5 inch 256GB Space Grey | erto@1234.com | test123  | Refresh | Enabled   | £30           | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | Yes         |