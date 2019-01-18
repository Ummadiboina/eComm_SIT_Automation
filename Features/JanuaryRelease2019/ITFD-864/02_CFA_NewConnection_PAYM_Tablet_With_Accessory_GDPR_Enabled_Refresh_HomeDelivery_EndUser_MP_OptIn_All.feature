Feature: 02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Tablet' and any accessories with home
  delivery option and lands on delivery page then customer should not be displayed with end user question instead the customer
  should see GDPR consent and placed an order by opting of Marketing preference 'All', then the Order consent profile should
  be created in CMT as expected

  @Web
  Scenario Outline: 02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And Select PayM Tablet <tabletname>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | tabletname         | B1     | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | iPad Pro 10.5 inch | Select | Select | Select | Not | Enabled    | Connected  | No          | No       |
