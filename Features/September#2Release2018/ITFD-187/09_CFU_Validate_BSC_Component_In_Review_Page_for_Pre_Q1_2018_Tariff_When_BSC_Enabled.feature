Feature: 09_CFU_Validate_BSC_Component_In_Review_Page_for_Pre_Q1_2018_Tariff_When_BSC_Enabled

  This scenario ensures when customer on SIMO upgrade journey lands on Review & confirm page by selecting Pre Q1 2018 tariff, then BSC component should not be displayed in the second section when BSC is enabled

  @Web
  Scenario Outline: 09_CFU_Validate_BSC_Component_In_Review_Page_for_Pre_Q1_2018_Tariff_When_BSC_Enabled
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'No thanks, I'll keep my device' button
    And I click on 'Sim only Tariff' tab
    Then the 'Phones' button should be selected by default
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                   | password | BillCap       | CapAmount | BSCstatus | tariffAmt | dataValue | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | e2ed14411644@stf.ref.co.uk | test123  | DontCapMyBill | Nill      | Disabled  | £18       | 6GB       | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |