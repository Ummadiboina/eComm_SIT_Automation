Feature: 73_CFA_Existing_customer_Phones_Validate_OFCOM_With_Valid_STAC_Code_When_OfCom_Enabled


  @Web

  Scenario Outline: 73_CFA_Existing_customer_Phones_Validate_OFCOM_With_Valid_STAC_Code_When_OfCom_Enabled
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And select an insurance
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And land on the payment page and input <Username> and other details for existing customer
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | handset   | color      | Capacity | BSCstatus | BillCap   | CapAmount | username                      | password | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode |
      | Galaxy S9 | Space Grey | 512GB    | Enabled   | CapMyBill | £60       | dono16923017@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | Phones  | Enabled     | Yes          | valid      | STAC        | Yes                 | 07707003266    | 723645XBA   |
