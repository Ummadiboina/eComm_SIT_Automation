Feature: 2_CFA_Tablet_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline:2_CFA_Tablet_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled

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
    #And Click on Continue CTA and validate error text for <codeStatus> if exist

    Examples:
      | tabletname         | Firstname | Surname | Username     | journey | ofComStatus | pacStacCheck | codeStatus | codeVariant | ofComMobileNum | BSCstatus | BillCap   | CapAmount |
      | iPad Pro 10.5 inch | TEST      | ACCEPTA | TEST ACCEPTA | CFA     | Enabled     | Not          | Nill       | Nill        | Nill           | Enabled   | CapMyBill | £15       |
