Feature: 08_CFU_Validate_BSC_Component_In_Review_Page_for_Post_Q1_2018_Tariff_When_BSC_Disabled

  This scenario ensures when customer on SIMO upgrade journey lands on Review & confirm page by selecting Post Q1 2018 tariff, then BSC component should not be displayed in the second section when BSC is disabled

  @Web
  Scenario Outline: 08_CFU_Validate_BSC_Component_In_Review_Page_for_Post_Q1_2018_Tariff_When_BSC_Disabled
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And Click on 'No thanks, I'll keep my device' button
    #And I click on 'Sim only Tariff' tab
    Then the 'Phones' button should be selected by default
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section in upgrade
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                      | password | BillCap       | CapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | till24542026@stf.ref.o2.co.uk | test123  | DontCapMyBill | Nill      | Disabled  | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |