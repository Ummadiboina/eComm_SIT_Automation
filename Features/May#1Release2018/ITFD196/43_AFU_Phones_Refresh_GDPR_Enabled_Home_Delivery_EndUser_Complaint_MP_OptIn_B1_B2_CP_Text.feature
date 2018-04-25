Feature: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B1_B2_CP_Text

  #launch hooks and get browser
  @Web
  Scenario Outline: 43_AFU_Phones_Refresh_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B1_B2_CP_Text
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | C1     | C2     | C3  | C4  |
      | 07521009589 | phone | Random  | Me       | Select | Not | Select | Select | Select | Select | Not | Not |
