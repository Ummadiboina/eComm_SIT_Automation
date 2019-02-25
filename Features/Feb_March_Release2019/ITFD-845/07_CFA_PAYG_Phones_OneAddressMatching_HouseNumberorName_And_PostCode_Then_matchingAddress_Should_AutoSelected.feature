Feature: 07_CFA_PAYG_Phones_OneAddressMatching_HouseNumberorName_And_PostCode_Then_matchingAddress_Should_AutoSelected

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Phones' and lands on delivery page
  and enters house number and postal code, if only one address is matching corresponding to entered postcode then it
  should be auto selected

  @Web
  Scenario Outline: 07_CFA_PAYG_Phones_OneAddressMatching_HouseNumberorName_And_PostCode_Then_matchingAddress_Should_AutoSelected
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | postcode | HouseNumber | color      | Firstname | tariff        | BSCstatus | Surname | Username     | B1     | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | SL33FP   | 10          | Space Grey | TEST      | 1GB Preloaded | Disabled  | ACCEPTA | TEST ACCEPTA | Select | Select | Select | Not | Enabled    | Connected  | No          | No       |
