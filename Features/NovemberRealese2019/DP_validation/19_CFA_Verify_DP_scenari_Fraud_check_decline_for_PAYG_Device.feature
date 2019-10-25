Feature: 19_CFA_Verify_DP_scenari_Fraud_check_decline_for_PAYG_Device


  @Web
  Scenario Outline: CFA_Verify_DP_scenari_Fraud_check_decline_for_PAYG_Device  fraud check team set the data


    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
    And Navigate to device details page
    #And Land on the 'Tariffs and extra' page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate DP checkout CTA and copy text in Basket page in <journey> journey when <DPFlag> payment mode enabled and DP status is <DPStatus>
    And input details <payPalUser> <payPalPassword> and perform transaction with PayPal payment method from Basket page
    And validate deductable upFront amount confirmation message from PayPal Account in delivery page when <DPFlag> and <DPStatus>
    And Input details for About you section for PayPal users in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details and Validate <postalCode> and <HouseNumber> details for <postalCodeType> in delivery page
    And land on the payment page and input <Username> and other details and Validate DP
    Then Order Decline page should be displayed


    Examples:
      | handset       |color | Capacity|tariff |payPalUser                          | payPalPassword | postalCode     | HouseNumber | postalCodeType |Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | journey | DPFlag | DPStatus |
      | iPhone 8 Plus |      |         |       |sb-iitid433240@personal.example.com | 5PiDsE8/       |   residential  |    312      |   Valid        | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | CFA     | Both   | Enabled  |
