Feature: 01_CFA_New_companion_device_click_Continue_on_interstitial_overlay_in_PD_page


  @Web
  Scenario Outline: CFA_New_companion_device_when_user_doesn't_want_to_buy_iPhone_clicking_see_our_plans_CTA_on_PD_page
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    #And Navigate to device details page for color selection
    And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select a color
    And select <color> color of the connected device
    And Click 'See our plans' and verify the interstitial overlay
    And Click on 'Continue' button on interstitial overlay
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Verify BSC section on Basket page
    And Click on the 'Existing Customer checkout' CTA
    Then user should land on signin page

    Examples:
      | device       |  BSCstatus  |  color   |
      |              |             |          |