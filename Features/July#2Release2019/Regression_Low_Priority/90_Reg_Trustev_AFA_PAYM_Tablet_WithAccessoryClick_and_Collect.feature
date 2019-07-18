Feature: 90_Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect

  @Web

  Scenario Outline: Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Select a valid Accessory <Accessory>
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Answer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device            | Tariffs | BSCstatus | BillCapAmount | Accessory                | Firstname | Surname | HouseNumber | PostCode | Username     | Password | Confirm_Password | Security_Answer | B1  | B2  | B3     | B4  | Text | Email | Phone  | Post   | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType | DeviceModule |
      | Galaxy Tab A 10.5 | Refresh | Enabled   | £100          | Galaxy Watch 46mm Silver | TEST      | ACCEPTA | 32          | SL11ER   | TEST ACCEPTA | test123  | test123          | Anything        | Not | Not | Select | Not | Not  | Not   | Select | Select | Me       | Enabled | test123  | test123         | Jkhan          | No        | Connected  | Tablet       |
