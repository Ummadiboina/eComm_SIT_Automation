Feature: 14_CFA_PAYM_Phone_SIMO_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phones SIMO' and lands on delivery
  page and enters  postal code, if there are too many addresses are matching corresponding to entered house number and
  postcode then customer should be shown the copy 'There are too many results for this postcode. Add your house number
  and try again'

  @Web
  Scenario Outline: 14_CFA_PAYM_Phone_SIMO_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    #And Continue to Review page and review the order
    #Then order confirmation is displayed
    #Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract  | postcode | HouseNumber | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 12 Months | SL14DX   |             | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £0        | Select | Not | Select | Not | Enabled    | Connected  | No          | No       |
