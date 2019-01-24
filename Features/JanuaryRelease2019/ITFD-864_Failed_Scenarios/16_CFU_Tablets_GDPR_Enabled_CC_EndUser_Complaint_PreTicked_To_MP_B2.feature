Feature: 16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B3

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Tablet' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and Pre Ticked MP - B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B3
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And verify that 'Sim Swap Form'link is diplayed
    When I click on 'Sim Swap Form' I should be opned with a new tab
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page and choose to collect from store
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username               | password | tariff | BSCstatus | BillCap   | CapAmount | Tablet             | Username     | Action    | B1  | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | inavl0ww_555130@o2.com | test123  |        | Enabled   | CapMyBill | £10       | iPad 9.7 inch 2018 | TEST ACCEPTA | enterCode | Not | Not | Select | Not | Enabled    | Connected  | Yes         | No       |
