Feature: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Compliant_MP_OptIn_B3_B4_CP_Email_Phone

  This Scenario ensures that when the upgrade Agent with Compliant consent status selects 'PAYM Phone' and placed an order as an End user ,then the customer should be able to select displayed
  with 'MP - B3/B4'and 'CP - Email/Phone' in Advisor checks

  #launch hooks and get browser
  @Web
  Scenario Outline: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Compliant_MP_OptIn_B3_B4_CP_Email_Phone
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    When Pay by card
    #When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | Consumer | status  | MBBStatus | DeviceType |
      | 07521000051 | phone  | Random  | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Me       | Enabled | No        | Connected  |
