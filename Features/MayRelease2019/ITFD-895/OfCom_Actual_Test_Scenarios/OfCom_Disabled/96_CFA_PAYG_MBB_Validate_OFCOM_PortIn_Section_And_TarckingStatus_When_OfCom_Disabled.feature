Feature: 96_CFA_PAYG_MBB_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled


  @Web
  Scenario Outline:96_CFA_PAYG_MBB_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled

    Given I am an CFA user and Lands on shop page
    And Navigate to PayG MBB page
    And I choose MBB PayG "Random Device"
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <codeStatus> if exist
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | tariff | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | ofComMobileNum | BSCstatus |
      |        | TEST      | ACCEPTA | TEST ACCEPTA | MBB     | Disabled    | Not          | Nill       | Nill        | Nill           | Disabled  |
