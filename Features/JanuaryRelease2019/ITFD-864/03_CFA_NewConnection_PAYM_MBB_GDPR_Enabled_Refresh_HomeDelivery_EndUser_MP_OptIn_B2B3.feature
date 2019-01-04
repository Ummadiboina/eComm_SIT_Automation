Feature: 03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM MBB' device with home delivery option
  and lands on delivery page then customer should not be displayed with end user question instead the customer should see
  GDPR consent  and placed an order by opting of Marketing preference 'B2, B3', then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3
    Given I am an CFA user and Lands on shop page
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and verify copy text message below home address
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device_Name   | Firstname | Surname | Username     | BSCstatus | BillCap       | CapAmount | B1  | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | DontCapMyBill | Nill      | Not | Select | Select | Not | Enabled    | Connected  | No          | No       |