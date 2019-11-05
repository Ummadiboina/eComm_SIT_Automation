Feature: 09_CFA_Verify_DP_E2E_journey_for_Click_and_Collect_Now


  @Web
  Scenario Outline: CFA_Verify_DP_E2E_journey_for_Click_and_Collect_Now

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And Navigate to device details page for color selection
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    #And select <Capacity> capacity of the connected device
    And Check the availability to collect from store now in product details page
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and verify store selected from PD page is displaying
    And Validate DP checkout CTA and copy text in Basket page in <journey> journey when <DPFlag> payment mode enabled and DP status is <DPStatus>
    And input details <payPalUser> <payPalPassword> and perform transaction with PayPal payment method from Basket page
    And validate deductable upFront amount confirmation message from PayPal Account in delivery page when <DPFlag> and <DPStatus>
    And Input details for About you section for PayPal users in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details and validate DP Click and Collect delivery address in delivery page
    And land on the payment page and input <Username> and other details and Validate DP with click and collect address store
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | handset       |  color  | payPalUser                          | payPalPassword | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | journey | DPFlag | DPStatus |
      | iPhone 8 Plus |  Black  |sb-iitid433240@personal.example.com | 5PiDsE8/       | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | CFA     | Both   | Enabled  |
