Feature: 92_CFA_PAYM_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled


  @Web
  Scenario Outline:92_CFA_PAYM_Tablets_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled

    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist


    Examples:
      | Device             | Firstname | Surname | tariff        | journey | ofComStatus | pacStacCheck | pacStacCode | codeStatus | codeVariant | ofComMobileNum | BSCstatus | BillCap   | CapAmount |
      | iPad Pro 10.5 inch | TEST      | ACCEPTA | 1GB Preloaded | CFA     | Disabled    | Not          | Nill        | Nill       | Nill        | Nill           | Disabled  | CapMyBill | £15       |
