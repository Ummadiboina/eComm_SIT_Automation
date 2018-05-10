Feature: 47_AFU_Tablets_Standard_GDPR_Enabled_CC_Not_EndUser_Retained_MP_Suppressed

  This Scenario ensures that when the Agent in Upgrade journey with Retained consent status selects 'Tablet' with Click and collect placed an order by selecting End user as 'Someone else',
  then the Order consent profile should be created in CMT as expected

  #launch hooks and get browser
  @Web
  Scenario Outline: 47_AFU_Tablets_Standard_GDPR_Enabled_CC_Not_EndUser_Retained_MP_Suppressed
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    #When submit order button is clicked
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device  | Tariffs  | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | 07568410552 | Tablets | Standard | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |