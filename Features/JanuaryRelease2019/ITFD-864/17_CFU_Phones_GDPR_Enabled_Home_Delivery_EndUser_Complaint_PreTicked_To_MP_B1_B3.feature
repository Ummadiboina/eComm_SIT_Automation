Feature: 17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1_B3

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Phones' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and Pre Ticked MP - B1B3 and place an order as an End user then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1_B3
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
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
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Select the Home address
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | password | houseNumber | PostCode | handset       | BSCstatus | BillCap       | CapAmount | Username     | Action    | tariff                   | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 22fe97536512@stf.ref.o2.co.uk | test123  | 11          | SL11Er   | iPhone 8 Plus | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Select | Not | Select | Not | Enabled    | Connected  | Yes         | No       |
