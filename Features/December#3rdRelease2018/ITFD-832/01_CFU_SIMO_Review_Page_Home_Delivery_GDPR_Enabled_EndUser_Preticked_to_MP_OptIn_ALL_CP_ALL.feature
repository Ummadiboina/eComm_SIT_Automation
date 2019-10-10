Feature: 01_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_OptIn_ALL_CP_ALL

  This Scenario ensures that the Marketing Preference 'ALL' and CP 'ALL' are pre-ticked  during an Upgrade journey as
  the customer has previously saved the preferences to 'ALL' for both MP and CP.

  @Web
  Scenario Outline: 01_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_OptIn_ALL_CP_ALL
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
      | username                      | BSCstatus | BillCap   | CapAmount | Username     | password | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType | PreSelected |
      | 02ma49092549@stf.ref.o2.co.uk | abcd   | CapMyBill | £30       | TEST ACCEPTA | test123  | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  | Yes         |