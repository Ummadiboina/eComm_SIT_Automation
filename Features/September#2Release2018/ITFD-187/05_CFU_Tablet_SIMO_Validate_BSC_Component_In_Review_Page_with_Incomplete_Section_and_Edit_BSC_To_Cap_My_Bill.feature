Feature: 05_CFU_Tablet_SIMO_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_and_Edit_BSC_To_Cap_My_Bill

  This scenario ensures when customer on Tablet SIMO upgrade journey lands on Review & confirm page and edit BSC component to cap the bill then customer should be redirected to next incomplete section and place your order CTA should be disabled until all the sections are incomplete

  @Web
  Scenario Outline: 05_CFU_Tablet_SIMO_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_and_Edit_BSC_To_Cap_My_Bill
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'No thanks, I'll keep my device' button
    And I click on 'Sim only Tariff' tab
    And click on the 'Tablets' button
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate BSC 'Edit' link
    Then I should see 'Your Sim Card'section
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Validate and click on BSC 'Edit' link to change <BillCap>
    And Validate consumer Bill Spend Caps section when BSC is <NewBillCap>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
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
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                   | password | BillCap       | CapAmount | NewBillCap | NewCapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | e2ed14411644@stf.ref.co.uk | test123  | DontCapMyBill | Nill      | CapMyBill  | £10          | Enabled   | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |