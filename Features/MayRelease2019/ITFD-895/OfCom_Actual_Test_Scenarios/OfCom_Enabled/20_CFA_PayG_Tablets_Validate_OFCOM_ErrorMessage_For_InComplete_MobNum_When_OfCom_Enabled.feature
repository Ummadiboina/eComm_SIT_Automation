Feature: 20_CFA_PayG_Tablets_Validate_OFCOM_ErrorMessage_For_InComplete_MobNum_When_OfCom_Enabled


  @Web
  Scenario Outline:20_CFA_PayG_Tablets_Validate_OFCOM_ErrorMessage_For_InComplete_MobNum_When_OfCom_Enabled

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
      | Device             | Firstname | Surname | tariff        | journey | ofComStatus | pacStacCheck | pacStacCode | ofComMobileNum | pacStackRetainCheck | codeStatus | BSCstatus |
      | iPad Pro 10.5 inch | TEST      | ACCEPTA | 1GB Preloaded | CFA     | Enabled     | Yes          | XCR661826   | 074123216      |                     | InComplete | Disabled  |
