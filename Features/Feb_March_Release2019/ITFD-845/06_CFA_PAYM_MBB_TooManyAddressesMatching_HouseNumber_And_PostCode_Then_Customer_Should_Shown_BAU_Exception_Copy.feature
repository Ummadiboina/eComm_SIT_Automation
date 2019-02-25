Feature: 06_CFA_PAYM_MBB_TooManyAddressesMatching_HouseNumber_And_PostCode_Then_Customer_Should_Shown_BAU_Exception_Copy

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM MBB' and lands on delivery page and
  enters house number and postal code, if there are too many addresses are matching corresponding to entered house number
  and postcode then customer should be shown the copy 'Unfortunately we can't deliver to this address. Try a different
  address, or click and collect from your nearest O2 store'

  @Web
  Scenario Outline: 06_CFA_PAYM_MBB_TooManyAddressesMatching_HouseNumber_And_PostCode_Then_Customer_Should_Shown_BAU_Exception_Copy
    Given I am an CFA user and Lands on shop page
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and verify copy text message below home address
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device_Name   | postcode | HouseNumber | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1  | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | LS12 1DF | 10          | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £20       | Not | Select | Select | Not | Enabled    | Connected  | No          | No       |