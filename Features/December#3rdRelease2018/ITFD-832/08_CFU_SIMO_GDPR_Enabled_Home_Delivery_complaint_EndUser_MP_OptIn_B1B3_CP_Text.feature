Feature: 08_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3_CP_Text

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'SIMO' and placed an order as an End user ,then the customer should be displayed with MP - B1/B3 and CP - Text
  selected in default in Order confirmation page

  @Web
  Scenario Outline: 08_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3_CP_Text
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And Click on 'Select' CTA to buy a tariff
    #And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>


    Examples:
      | username                      | BSCstatus | BillCap   | CapAmount | Username     | password | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 02ma49092549@stf.ref.o2.co.uk | Enabled   | CapMyBill | £20       | TEST ACCEPTA | test123  | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | Yes         |