Feature: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B3_B4_CP_Email_Phone

  #launch hooks and get browser
  @Web
  Scenario Outline: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B3_B4_CP_Email_Phone
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus>
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text | Email    | Phone     | Post |Consumer|status|MBBStatus|
      | 07521009589 | phone | Random  | Me       | Select | Not | Select | Select | Select | Select | Not | Not |Me       |Enabled|No             |
