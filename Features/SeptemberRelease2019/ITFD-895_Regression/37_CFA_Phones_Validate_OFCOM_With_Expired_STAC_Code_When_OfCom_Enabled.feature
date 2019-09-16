Feature: 37_CFA_Phones_Validate_OFCOM_With_Expired_STAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:37_CFA_Phones_Validate_OFCOM_With_Expired_STAC_Code_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And select an insurance
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And Input about you details <Firstname> and <Surname> and other delivery details in delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist


    Examples:
      | handset   | Firstname | Surname | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus | BillCap   | CapAmount |
      | Galaxy S9 | TEST      | ACCEPTA | Phone   | Enabled     | Yes          | Expired    | PAC         | Yes                 | 07707003855    | 438444XBA   | Enabled   | CapMyBill | £15       |
