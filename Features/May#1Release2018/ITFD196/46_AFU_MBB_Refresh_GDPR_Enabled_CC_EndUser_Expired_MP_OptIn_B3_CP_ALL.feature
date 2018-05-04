Feature: 46_AFU_MBB_Refresh_GDPR_Enabled_CC_EndUser_Expired_MP_OptIn_B3_CP_ALL

  This Scenario ensures that when the Agent in Upgrade journey with Expired consent status selects 'MBB' with Click and collect placed an order by opting of Marketing preference 'B3' and CP 'ALL',
  then the Order consent profile should be created in CMT as expected

  #launch hooks and get browser
  @Web
  Scenario Outline: 46_AFU_MBB_Refresh_GDPR_Enabled_CC_EndUser_Expired_MP_OptIn_B3_CP_ALL
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
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | MBBStatus |DeviceType|
      | 07521127505 | dongle | Random  | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled | Yes       |Connected |