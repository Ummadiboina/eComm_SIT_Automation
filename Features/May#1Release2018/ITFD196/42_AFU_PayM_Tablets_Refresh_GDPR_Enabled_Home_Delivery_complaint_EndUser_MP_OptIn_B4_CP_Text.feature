Feature: 42_AFU_PayM_Tablets_Refresh_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B4_CP_Text

  #launch hooks and get browser
  @Web
  Scenario Outline: 42_AFU_PayM_Tablets_Refresh_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B4_CP_Text
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status>
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text | Email    | Phone     | Post  |status|Consumer|
      | 07521009589 | dongle | Random  | Me       | Select | Not | Select | Select | Select | Select | Not | Not |Enabled|Me     |
