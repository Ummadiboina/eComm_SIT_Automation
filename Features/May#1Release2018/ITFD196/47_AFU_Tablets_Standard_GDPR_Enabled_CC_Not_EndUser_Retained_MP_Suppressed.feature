Feature: 47_AFU_Tablets_Standard_GDPR_Enabled_CC_Not_EndUser_Retained_MP_Suppressed

  #launch hooks and get browser
  @Web
  Scenario Outline: 47_AFU_Tablets_Standard_GDPR_Enabled_CC_Not_EndUser_Retained_MP_Suppressed
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
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text | Email    | Phone     | Post |status|
      | 07521009589 | Tablets | Random  | Me       | Select | Not | Select | Select | Select | Select | Not | Not |Enabled|
