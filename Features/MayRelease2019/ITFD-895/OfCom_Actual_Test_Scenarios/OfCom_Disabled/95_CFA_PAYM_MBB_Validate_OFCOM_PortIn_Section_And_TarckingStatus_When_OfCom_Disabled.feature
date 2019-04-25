Feature: 95_CFA_PAYM_MBB_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled


  @Web
  Scenario Outline:95_CFA_PAYM_MBB_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled

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
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <codeStatus> if exist
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Device_Name   | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | ofComMobileNum | BSCstatus | BillCap       | CapAmount |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | MBB     | Disabled    | Not          | Nill       | Nill        | Nill           | Enabled   | DontCapMyBill | Nill      |
