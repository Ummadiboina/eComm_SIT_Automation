Feature: 134_FR_UpFront_AFU_PAYM_Tablet

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Tablet Acqusistion Journey
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And In Agent Build your plan with <upFront> <term> and <data>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    #Then perform all the advisory checks
    #When Pay by card
    #Then Order confirmation message should be displayed

    Examples:
      | user        | Device                              | Tariffs | upFront | term | data | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 07521008097 | iPad Pro 10.5 inch 256GB Space Grey | Refresh | avg     | avg  | min  | Enabled   | £10           | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |