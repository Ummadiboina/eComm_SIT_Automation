Feature: 05_CFA_PAYM_Tablets_MoreThanOneAddressMatching_HouseNumber_And_PostCode_Then_Customer_Should_Select_One_From_DropdownList

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Tablets' and lands on delivery page
  and enters house number and postal code, if more than one address is matching corresponding to entered house number
  and postcode then customer should be able to select one from the dropdown list

  @Web
  Scenario Outline:05_CFA_PAYM_Tablets_MoreThanOneAddressMatching_HouseNumber_And_PostCode_Then_Customer_Should_Select_One_From_DropdownList

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And Select PayM Tablet <tabletname>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | tabletname         | postcode | HouseNumber | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | iPad Pro 10.5 inch | SL11ER   | 100         | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £15       | Select | Not | Not | Not | Connected  | No          | No       |
