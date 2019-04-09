Feature: 10_Existing_Customer_having_reached_max_connected_devices

  @Web
  Scenario Outline: Existing_Customer_having_reached_max_connected_devices
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And click 'Choose this plan' CTA and verify if the interstitial overlay is displayed
    And Click on 'Continue' button on interstitial overlay
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Click on the 'Existing Customer checkout' CTA
    Then Verify if the error message is displayed on the lead device pairing page

    Examples:
      | username       | password     |     device       | BSCstatus         |
      |                |              |                   |                |
