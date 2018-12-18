Feature:10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All

  This Scenario ensures that when the Customer in Tablet SIMO acquisition journey selects 'simo tariff' with home
  delivery option and lands on delivery page then customer should not be displayed with end user question instead the
  customer should see GDPR consent and placed an order with Marketing preference OptOut-'All', then the Order consent
  profile should be created in CMT as expected

  @Web
  Scenario Outline: 10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'Tablets' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract  | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1  | B2  | B3  | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 12 Months | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £20       | Not | Not | Not | Not | Enabled    | Connected  | No          | No       |
