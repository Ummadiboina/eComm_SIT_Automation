Feature: 98_Reg_June_CFU_Validate_Basket_Page_For_Simo_Tariff_With_Active_Voucherable_Promotions_Available_And_Valid_For_Current_Date_And_No_Upfront_Payment_Pending

  This scenario validates basket and payment page is displayed for customer in Simo upgrade journey with active voucherable promotions available for the selected tariff and No upfront payment pending from customer

  @Web
  Scenario Outline: 98_Reg_June_CFU_Validate_Basket_Page_For_Simo_Tariff_With_Active_Voucherable_Promotions_Available_And_Valid_For_Current_Date_And_No_Upfront_Payment_Pending
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And I click on 'Sim only Tariff' tab
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    #And Select ribboned tariff <tariff> in upgrade journey
    And I Land on the Plan included basket page and choose home delivery option
    And Click on 'plus' accordion at get promo code section and enter valid <promoCode> details in Basket page
    And Select 'I need a new sim' option
    And click on "go to checkout" button
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | tariffAmt | dataValue | promoCode | password | BSCstatus | BillCap       | CapAmount | Username     | consumer | B1  | B2  | B3     | B4  | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 16fe38101321@stf.ref.o2.co.uk | £18       | 6GB       | VOUCHER3  | test123  | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | Me       | Not | Not | Select | Not | Enabled    | No        | Connected  | No          | No       |
