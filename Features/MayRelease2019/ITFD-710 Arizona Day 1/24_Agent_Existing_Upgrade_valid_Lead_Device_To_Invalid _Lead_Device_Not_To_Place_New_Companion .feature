Feature: 24_Agent_Existing_Upgrade_valid_Lead_Device_To_Invalid _Lead_Device_Not_To_Place_New_Companion

  #launch hooks and get browser
  @Web
  Scenario Outline: Existing_Upgrade_valid_Lead_Device_To_Invalid _Lead_Device_Not_To_Place_New_Companion
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    #And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus_Companion>
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section


    Examples:
      | user        | Device | Tariffs  | BSCstatus | BillCapAmount | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | BSCstatus_Companion | DeviceType |
      | 07568414065 |        | Standard | Enabled   |       £60     | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | Disabled        | Connected  |


