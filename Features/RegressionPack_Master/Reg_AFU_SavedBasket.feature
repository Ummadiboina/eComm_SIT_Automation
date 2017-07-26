Feature: Reg_AFU_SavedBasket

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: AFU_Saved Basket functionality
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid Accessory <Device>
    And choose to email basket to save the basket

    Examples: 
      | user        | Device                           |
      | 07521113738 | iPhone 7 Evo Elite Brushed Black |