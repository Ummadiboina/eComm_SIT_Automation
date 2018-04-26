Feature: 46_AFU_MBB_Refresh_GDPR_Enabled_CC_EndUser_Expired_MP_OptIn_B3_CP_ALL

  #launch hooks and get browser
  @Web
  Scenario Outline: 46_AFU_MBB_Refresh_GDPR_Enabled_CC_EndUser_Expired_MP_OptIn_B3_CP_ALL
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status>
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text | Email    | Phone     | Post |status|
      | 07521127505 | dongle | Random  | Me       | Select | Not | Select | Select | Select | Select | Not | Not |Enabled|