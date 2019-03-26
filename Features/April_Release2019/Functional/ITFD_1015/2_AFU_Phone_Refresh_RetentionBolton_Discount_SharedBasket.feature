Feature: 2_AFU_Phone_Refresh_RetentionBolton_Discount_SharedBasket

  AFU Phone	Refresh	Retention Bolton	Device/Tariff Discount	Shared basket

  @Web
  Scenario Outline: 2_AFU_Phone_Refresh_RetentionBolton_Discount_SharedBasket

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
    And Verify that the Bolton section Display in Basket and SSC pages
    And click on "go to checkout" button
    #And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Verify that the Bolton section Display in Basket and SSC pages
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Verify that the Bolton section Display in Basket and SSC pages
    #And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    And Verify that the Bolton section Display in Basket and SSC pages
    Then order confirmation is displayed

    Examples:
      | user        | Device               | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected | RetentionBolton | username                      | password |
      | 07568417407 | Apple iPhone XR 64GB | Refresh | Enabled   | £200          | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          | yes             | 15se92529299@stf.ref.o2.co.uk | test123  |