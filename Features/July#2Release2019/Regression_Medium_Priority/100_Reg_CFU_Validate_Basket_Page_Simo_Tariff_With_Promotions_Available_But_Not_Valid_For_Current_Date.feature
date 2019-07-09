Feature: 100_Reg_CFU_Validate_Basket_Page_Simo_Tariff_With_Promotions_Available_But_Not_Valid_For_Current_Date

  This scenario validates if basket page is displayed for customer in Simo upgrade journey with matching promotions available but not valid for current date

  @Web
  Scenario Outline: 100_Reg_CFU_Validate_Basket_Page_Simo_Tariff_With_Promotions_Available_But_Not_Valid_For_Current_Date
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And I click on 'Sim only Tariff' tab
    And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    And Click on Add to basket CTA in Simo Listing Page
    And Click on 'plus' accordion at get promo code section and enter valid <promoCode> details in Basket page
    #And Remove promo code to continue
    And Select 'I need a new sim' option
    And click on "go to checkout" button
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | tariffAmt | dataValue | promoCode        | password | Username     | BSCstatus | BillCap   | CapAmount | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | till05542449@stf.ref.o2.co.uk | £13       | 3GB       | expiredpromotion | test123  | TEST ACCEPTA | Enabled   | CapMyBill | £30       | Me       | Select | Not | Select | Not | Select | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |