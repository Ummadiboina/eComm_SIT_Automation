Feature: 99_Reg_CFU_ValidateBasketPage_Simo_Tariff_With_Active_VoucherablePromotions_Valid_For_Current_Date_And_UpfrontPaymentPending

  This scenario validates basket and payment page is displayed for customer in Simo upgrade journey with active voucherable promotions available and upfront payment pending from customer

  @Web
  Scenario Outline: 99_Reg_CFU_ValidateBasketPage_Simo_Tariff_With_Active_VoucherablePromotions_Valid_For_Current_Date_And_UpfrontPaymentPending
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And I click on 'Sim only Tariff' tab
    #And click on the 'MBB' button
    #And click on the 'Tablets' button
    And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And Click on different <Contract>  Months Tariff in Tab
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Select ribboned tariff <tariff> in upgrade journey
    #And I Land on the Plan included basket page and choose home delivery option
    And Click on Add to basket CTA in Simo Listing Page
    And Click on 'plus' accordion at get promo code section and enter valid <promoCode> details in Basket page
    And Select 'I need a new sim' option
    And click on "go to checkout" button
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And copy text SIM delivery required or not is displayed
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                                                | Contract  | tariffAmt | dataValue | promoCode          | password | BSCstatus | BillCap   | CapAmount | Username     | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | stester11857029c2-561b-4654-b12e-0a0fe11e8a00@gmail.com | 18 months | £22       | 40GB      | 1SIMOOFFERMONETARY | test123  | Enabled   | CapMyBill | £15       | TEST ACCEPTA | Me       | Select | Not | Select | Not | Select | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |