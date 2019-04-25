Feature: 14_Existing_Customer_upgrading_non_companion_device_to_companion_device_with_valid_lead_device

  @Web
  Scenario Outline: Existing_Customer_upgrading_non_companion_device_to_companion_device_with_valid_lead_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And select the non companion device from the dropdown in UoP
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And click 'Choose this plan' CTA and verify if the interstitial overlay is displayed
    And Click on 'Continue' button on interstitial overlay
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Click on the 'Existing Customer checkout' CTA
    And Verify if the customer lands on lead device pairing page with the MSISDN displayed in the dropdown
    And Click on 'Begin fast checkout'
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username       | password     |     device       |BSCstatus |
      |                |              |                  |          |