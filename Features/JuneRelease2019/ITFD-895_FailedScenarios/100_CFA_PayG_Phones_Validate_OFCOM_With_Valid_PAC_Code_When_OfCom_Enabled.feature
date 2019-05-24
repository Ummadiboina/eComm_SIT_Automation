Feature: 100_CFA_PayG_Phones_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:33_CFA_PayG_Phones_Validate_OFCOM_With_InValid_STAC_Code_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>


    Examples:
      | handset   | tariff | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus | BillCap   | CapAmount |
      | Galaxy S9 |        | TEST      | ACCEPTA | TEST ACCEPTA | Phone   | Enabled     | Yes          | valid      | PAC         | Yes                 | 07707003213    | XBA927492   | Disabled  | CapMyBill | £15       |
