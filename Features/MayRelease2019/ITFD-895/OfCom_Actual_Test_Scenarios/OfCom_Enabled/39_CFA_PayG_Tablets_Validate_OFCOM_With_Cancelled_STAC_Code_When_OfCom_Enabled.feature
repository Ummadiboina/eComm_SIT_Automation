Feature: 39_CFA_PayG_Tablets_Validate_OFCOM_With_Cancelled_STAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:39_CFA_PayG_Tablets_Validate_OFCOM_With_Cancelled_STAC_Code_When_OfCom_Enabled

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
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist


    Examples:
      | Device             | tariff        | Firstname | Surname | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus |
      | iPad Pro 10.5 inch | 1GB Preloaded | TEST      | ACCEPTA | Tablet  | Enabled     | Yes          | Cancelled  | STAC        | Yes                 | 07123456789    | 256407XCR   | Disabled  |
