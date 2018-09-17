Feature: 04_Agent_Existing_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab

  This scenario ensures that agent in Upgrade journey is not displayed with BSC boltons in Extras tab
  @Web
  Scenario Outline: 04_Agent_Existing_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab


    Examples:
      | Device | Tariffs  | user        |BSCstatus|
      | iPhone | Standard | 07731725809 |Enabled  |
