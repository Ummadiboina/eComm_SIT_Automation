Feature: 11_CFA_Smart_Watch_TooManyAddressesMatching_HouseNumber_And_PostCode_Then_Customer_Should_Shown_BAU_Exception_Copy

  This Scenario ensures that when the Customer in acquisition journey selects 'Smart watch' and lands on delivery page
  and enters house number and postal code, if there are too many addresses are matching corresponding to entered house
  number and postcode then customer should be shown the copy 'Unfortunately we can't deliver to this address. Try a
  different address, or click and collect from your nearest O2 store'

  @Web
  Scenario Outline: 11_CFA_Smart_Watch_TooManyAddressesMatching_HouseNumber_And_PostCode_Then_Customer_Should_Shown_BAU_Exception_Copy
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available <Device> Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    #And Continue to Review page and review the order
    #Then order confirmation is displayed
    #Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Firstname | postcode | HouseNumber | Surname | Username     | Device        | B1  | B2  | B3  | B4  | GDPRstatus | DeviceType    | PreSelected | KeyEvent |
      | TEST      | SL14DX   | 12          | ACCEPTA | TEST ACCEPTA | Random Device | Not | Not | Not | Not | Enabled    | Non Connected | No          | No       |
