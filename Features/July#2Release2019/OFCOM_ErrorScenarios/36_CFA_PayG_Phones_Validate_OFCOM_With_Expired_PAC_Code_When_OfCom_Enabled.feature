Feature: 36_CFA_PayG_Phones_Validate_OFCOM_With_Expired_PAC_Code_When_OfCom_Enabled


  @Web
  Scenario Outline:36_CFA_PayG_Phones_Validate_OFCOM_With_Expired_PAC_Code_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And Input about you details <Firstname> and <Surname> and other delivery details in delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist


    Examples:
      | handset   | Firstname | Surname | tariff | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus |
      | Galaxy S9 | TEST      | ACCEPTA |        | Phone   | Enabled     | Yes          | Expired    | PAC         | Yes                 | 07521136132    | XBA271372   | Disabled  |