Feature: 12_VerifyRetentionBoltonAddedToBasket_MBB_Standard_RetentionBolton_TariffDiscount_Combination

  Save basket :: MBB + StandardTariff + RetentionBolton + TariffDiscount

  @Web
  Scenario Outline: 12_VerifyRetentionBoltonAddedToBasket_MBB_Standard_RetentionBolton_TariffDiscount_Combination

    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify Saved basket after adding the retention items <RetentionBolton>
    And Signin using valid <username> and <password> credentials
    And Enter the OTAC and click on continue to landed on the Basket page
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | user                   | Device               | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected | RetentionBolton | username               | password |
      | in05261q_798134@o2.com | Apple iPhone XR 64GB | Standard | Enabled   | £200          | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          | yes             | in05261q_798134@o2.com | test123  |