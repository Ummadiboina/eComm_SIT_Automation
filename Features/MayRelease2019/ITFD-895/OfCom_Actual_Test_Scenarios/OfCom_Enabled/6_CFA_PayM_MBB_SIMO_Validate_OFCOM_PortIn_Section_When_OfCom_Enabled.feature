Feature: 6_CFA_PayM_MBB_SIMO_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline: 6_CFA_PayM_MBB_SIMO_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'MBB' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Data Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And For SiMO land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Contract | postcode | HouseNumber | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | journey | ofComStatus | pacStacCheck | pacStacCode | codeStatus | codeVariant | ofComMobileNum |
      | 30 Days  | SL33FP   |             | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £30       | MBB     | Enabled     | Not          | Nill        | Nill       | Nill        | Nill           |
