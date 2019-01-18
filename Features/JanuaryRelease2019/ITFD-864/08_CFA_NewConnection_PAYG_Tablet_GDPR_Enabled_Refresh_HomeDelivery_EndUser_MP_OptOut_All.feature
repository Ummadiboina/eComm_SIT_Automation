Feature: 08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Tablet'  with home delivery option
  and lands on delivery page then customer should not be displayed with end user question instead the customer should
  see GDPR consent and place an order with MP OptOut 'All', then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device             | Firstname | tariff        | BSCstatus | Surname | Username     | B1  | B2  | B3  | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | iPad Pro 10.5 inch | TEST      | 1GB Preloaded | Disabled  | ACCEPTA | TEST ACCEPTA | Not | Not | Not | Not | Enabled    | Connected  | No          | No       |
