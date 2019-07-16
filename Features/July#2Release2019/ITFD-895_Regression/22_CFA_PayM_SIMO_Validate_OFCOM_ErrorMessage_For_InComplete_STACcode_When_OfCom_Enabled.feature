Feature: 22_CFA_PayM_SIMO_Validate_OFCOM_ErrorMessage_For_InComplete_STACcode_When_OfCom_Enabled


  @Web
  Scenario Outline: 22_CFA_PayM_SIMO_Validate_OFCOM_ErrorMessage_For_InComplete_STACcode_When_OfCom_Enabled
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'Tablets' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And Input about you details <Firstname> and <Surname> and other delivery details in delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist


    Examples:
      | Contract  | postcode | HouseNumber | Firstname | Surname | BSCstatus | BillCap   | CapAmount | journey | ofComStatus | pacStacCheck | codeStatus | ofComMobileNum | pacStacCode | pacStackRetainCheck |
      | 12 Months | SL33FP   |             | TEST      | ACCEPTA | Enabled   | CapMyBill | £0        | SIMO    | Enabled     | Yes          | InComplete | 0770700358     | 965998XB    | Yes                 |
