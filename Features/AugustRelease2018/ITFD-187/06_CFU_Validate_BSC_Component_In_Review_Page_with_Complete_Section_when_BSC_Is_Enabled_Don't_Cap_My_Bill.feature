Feature: 06_CFU_Validate_BSC_Component_In_Review_Page_with_Complete_Section_when_BSC_Is_Enabled_Don't_Cap_My_Bill

  This scenario ensures when customer on SIMO upgrade journey lands on Review & confirm page and selects Don't cap my
  bill option unde BSC, then place your order CTA should be enabled when all the section are completed

  @Web
  Scenario Outline: 06_CFU_Validate_BSC_Component_In_Review_Page_with_Complete_Section_when_BSC_Is_Enabled_Don't_Cap_My_Bill
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'No thanks, I'll keep my device' button
    And I click on 'Sim only Tariff' tab
    Then the 'Phones' button should be selected by default
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate 'Edit' link
    Then I should see 'Your Sim Card'section
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select 'I need a new sim' option
    And Validate and click on 'Edit' link
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                   | password | BillCap       | CapAmount | NewCapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | e2ed14411644@stf.ref.co.uk | test123  | DontCapMyBill | Nill      | Nill         | Enabled   | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |