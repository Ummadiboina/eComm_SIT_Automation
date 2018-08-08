Feature: 03_AFA_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab

  This scenario ensures that agent in acquisition journey is not displayed with BSC boltons in Extras tab

  @Web
  Scenario Outline: 03_AFA_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab
    Given I login to Agent shop
    And performs Acquisition for New user
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab


    Examples:
      | Device | Tariffs | BSCstatus |
      | Tablet | Refresh | Enabled   |
