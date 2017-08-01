Feature: Reg_AFU_SavedBasket

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: AFU_Saved Basket functionality
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariffs> from tariffs tab
    And Select a valid PayM <Device>
    And select a valid Handset and Tariff combination
    # And Select a valid Accessory <Device>
    And choose to email basket to save the basket
    And Verify email is sent successfully

    Examples: 
      | user        | Device | Tariffs |
      | 07521113738 | Random | Refresh |
