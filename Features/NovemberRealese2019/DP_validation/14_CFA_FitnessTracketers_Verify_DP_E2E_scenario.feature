Feature: 14_CFA_FitnessTracketers_Verify_DP_E2E_scenario

  @Web
  Scenario Outline: CFA_FitnessTracketers_Verify_DP_E2E_scenario
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackers
    And select any available <Device> Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
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
      | Device         |payPalUser                          | payPalPassword | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | journey | DPFlag | DPStatus |
      | iPhone 8 Plus  |sb-esmdb445309@personal.example.com | test1234       | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | CFA     | Both   | Enabled  |
