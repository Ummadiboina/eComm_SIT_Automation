Feature: 37_CFA_Tablets_Validate_OFCOM_With_Expired_STAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:37_CFA_Tablets_Validate_OFCOM_With_Expired_STAC_Code_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And Select PayM Tablet <tabletname>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist

    Examples:
      | tabletname         | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus | BillCap   | CapAmount |
      | iPad Pro 10.5 inch | TEST      | ACCEPTA | TEST ACCEPTA | Tablet  | Enabled     | Yes          | Expired    | STAC        | Yes                 | 07123456789    | XDF543253   | Enabled   | CapMyBill | £15       |
