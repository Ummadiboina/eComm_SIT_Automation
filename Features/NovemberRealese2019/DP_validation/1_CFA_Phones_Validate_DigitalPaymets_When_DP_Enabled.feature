Feature: 1_CFA_Phones_Validate_DigitalPaymets_When_DP_Enabled


  @Web
  Scenario Outline:1_CFA_Phones_Validate_DigitalPaymets_When_DP_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
    #And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate DP checkout CTA and copy text in Basket page in <journey> journey when <DPFlag> payment mode enabled and DP status is <DPStatus>
    And input details <payPalUser> <payPalPassword> and perform transaction with PayPal payment method from Basket page
    And validate deductable upFront amount confirmation message from PayPal Account in delivery page when <DPFlag> and <DPStatus>
    And Input details for About you section for PayPal users in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details and validate DP delivery address in delivery page
    And land on the payment page and input <Username> and other details and Validate DP
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | handset       |color |Capacity     |payPalUser                          | payPalPassword | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | journey | DPFlag | DPStatus |
      | iPhone 8 Plus |      |             |sb-esmdb445309@personal.example.com | test1234       | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | CFA     | Both   | Enabled  |
