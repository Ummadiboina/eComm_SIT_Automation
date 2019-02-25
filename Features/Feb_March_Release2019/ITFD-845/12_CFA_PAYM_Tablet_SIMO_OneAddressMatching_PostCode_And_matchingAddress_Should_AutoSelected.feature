Feature: 12_CFA_PAYM_Tablet_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Tablet SIMO' and lands on delivery
  page and enters a postal code, if only one address is matching corresponding to entered postcode then it should be
  auto selected

  @Web
  Scenario Outline: 12_CFA_PAYM_Tablet_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'Tablets' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract  | postcode | HouseNumber | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 12 Months | SL33FP   |             | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £0        | Select | Not | Select | Not | Enabled    | Connected  | No          | No       |
