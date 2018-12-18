Feature: 13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Tablet'  and lands on delivery page
  then customer should not be displayed with end user question instead the customer should see GDPR consent and placed
  an order by opting of Marketing preference 'B1B2', with CC then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR to click and collect
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device | Firstname | tariff        | BSCstatus | Surname | Username     | B1     | B2     | B3  | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | A3 10  | TEST      | 1GB Preloaded | Disabled  | ACCEPTA | TEST ACCEPTA | Select | Select | Not | Not | Enabled    | Connected  | No          | No       |
