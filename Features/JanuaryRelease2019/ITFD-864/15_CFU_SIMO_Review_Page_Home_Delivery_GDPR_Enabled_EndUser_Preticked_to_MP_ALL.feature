Feature: 15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Tablet' and lands on
  review page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and MP PreTicked - B1B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | username                      | BSCstatus | BillCap   | CapAmount | password | B1     | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 02ma49092549@stf.ref.o2.co.uk | Enabled   | CapMyBill | £30       | test123  | Select | Select | Select | Not | Enabled    | Connected  | Yes         | No       |