Feature: 05_AFU_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab

  This scenario ensures that agent in Simo Upgrade journey is not displayed with BSC boltons in Extras tab

  @Web
  Scenario Outline: 05_AFU_Validate_BSC_Boltons_Are_Not_Displayed_In_Extras_Tab
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Click on 'Extras' tab
    Then Verify that the BSC Bolton is displayed or not in agent extra tab


    Examples:
      | Device | Tariffs | user        |BSCstatus|
      | iPhone | SimO    | 07801445776 |Enabled  |
