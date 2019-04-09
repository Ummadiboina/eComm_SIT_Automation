Feature: 17_Existing_Customer_Single_eligible_MSISDN_user_upgrade_lead_device_to_an_ineligible_lead_device_and_upgrade_companion_device

  @Web
  Scenario Outline: Existing_Customer_Single_eligible_MSISDN_user_upgrade_lead_device_to_an_ineligible_lead_device_and_upgrade_companion_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And select the device MSISDN from the dropdown in UoP
    And Click on 'Get Started' CTA
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page

    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And select the companion device from the dropdown in UoP
    And select any companion device <companion_device> from UoP
    And Select a tariff <tariff>
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And click on "go to checkout" button
    And Verify if the customer lands on lead device pairing page with the MSISDN displayed in the dropdown
    And Click on 'Begin fast checkout'
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username  | password     | Firstname | Surname | color      | handset | BSCstatus | BillCap   |  CapAmount   |    Action    |   companion_device    |   tariff   |
      |           |              |           | Accepta | Space Grey |        | Enabled   | CapMyBill |               |              |                       |            |
