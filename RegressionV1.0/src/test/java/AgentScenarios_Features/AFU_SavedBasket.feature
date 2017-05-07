Feature: AFU_Saved Basket functionality

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: AFU_Saved Basket functionality
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid Accessory <Device>
    And Select valid <Tariffs> from tariffs tab
    And choose to email basket to save the basket

    Examples: 
      | user        | Device          | Tariffs |
      | 07521113738 | S7 Edge 32 GB gold | Random  |