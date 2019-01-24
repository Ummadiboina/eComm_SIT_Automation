Feature: 14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Tablet' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and select MP OptIn - B1B2B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected


  @Web
  Scenario Outline: 14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Enter details in Delivery page for Click and collect
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username           | password | BSCstatus | BillCap   | CapAmount | Tablet             | color      | Capacity | Username     | Action    | B1     | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | cucumber024@o2.com | test123  | Enabled   | CapMyBill | £60       | iPad 9.7 inch 2018 | Space Grey | 32GB     | TEST ACCEPTA | enterCode | Select | Select | Select | Not | Enabled    | Connected  | No          | No       |
