Feature: 02_CFA_New_companion_device_when_user_doesn't_want_to_buy_iPhone_clicking_choose_this_plan_CTA_on_PD_page


  @Web
  Scenario Outline: CFA_New_lead_device_New_companion_device_when_user_doesn't_want_to_buy_iPhone_clicking_choose_this_plan_CTA_PD_page
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And select <color> color of the connected device
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select a color
    And click 'Choose this plan' CTA and verify if the interstitial overlay is displayed
    And Click on 'Continue' button on interstitial overlay
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    #Add a step to validate BSC section and Edit spend cap link on Basket page
    And Verify BSC section on Basket page
    And Click on the 'Existing Customer checkout' CTA
    Then user should land on signin page

    Examples:
      | device        |               BSCstatus          | color|
      |               |                Disabled       |         |