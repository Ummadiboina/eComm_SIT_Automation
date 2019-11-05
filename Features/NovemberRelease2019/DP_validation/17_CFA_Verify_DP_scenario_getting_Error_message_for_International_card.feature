Feature: 17_CFA_Verify_DP_scenario_getting_Error_message_for_International_card


  @Web
  Scenario Outline: 17_CFA_Verify_DP_scenario_getting_Error_message_for_International_card

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And Navigate to device details page for color selection
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    #And select <Capacity> capacity of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate DP checkout CTA and copy text in Basket page in <journey> journey when <DPFlag> payment mode enabled and DP status is <DPStatus>
    And input details <payPalUser> <payPalPassword> and perform transaction with PayPal payment method from Basket page
    And Validate Error message for International card


    Examples:
      | handset       | payPalUser                          | payPalPassword | postalCode     | HouseNumber | postalCodeType |Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | journey | DPFlag | DPStatus |
      | iPhone 8 Plus | sb-esmdb445309@personal.example.com | test1234       |  residential   |    312      |   Valid        | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | CFA     | Both   | Enabled  |
