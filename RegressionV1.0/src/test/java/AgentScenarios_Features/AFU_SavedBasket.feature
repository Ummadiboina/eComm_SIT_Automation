Feature: AFU_Saved Basket functionality

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: AFU_Saved Basket functionality
    Given I am an agent and login to Agent shop
    And performs new user new connection
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Select valid <Extras> from extras tab
    And Validate all the Basket content
    And choose to email basket to save the basket

    Examples: 
      | Device | Tariffs | Extras       |
      | TEST   | ACCEPTA | TEST ACCEPTA |