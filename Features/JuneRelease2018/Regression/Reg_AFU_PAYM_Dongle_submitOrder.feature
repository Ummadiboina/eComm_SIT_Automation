Feature: Reg_AFU_PAYM_Dongle_SubmitOrder

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M dongle Acqusistion Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType |
      | 07521008972 | dongle | Random  | Me       | Select | Not | Not | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  |
