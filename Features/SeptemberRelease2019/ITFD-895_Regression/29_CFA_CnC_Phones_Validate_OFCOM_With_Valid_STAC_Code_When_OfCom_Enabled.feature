Feature: 29_CFA_CnC_Phones_Validate_OFCOM_With_Valid_STAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:29_CFA_CnC_Phones_Validate_OFCOM_With_Valid_STAC_Code_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And select an insurance
    #And Choose some Accesssory
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And Input about you details <Firstname> and <Surname> and other delivery details in delivery page for click and collect
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And Click on Go To Payment CTA in delivery page
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | handset      | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus | BillCap   | CapAmount |
      | Galaxy Note9 | TEST      | ACCEPTA | TEST ACCEPTA | Phone   | Enabled     | Yes          | valid      | STAC        | Yes                 | 07707003844    | 380691XBA   | Enabled   | CapMyBill | £15       |
