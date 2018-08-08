Feature: 07_CFU_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_When_BSC_Is_Enabled_Edit_Don't_Cap_My_Bill

  This scenario ensures when customer on SIMO upgrade journey lands on Review & confirm page and edit the BSC selection
  to Don’t cap my bill, then customer should be redirected to next incomplete section and place your order CTA should be disabled until all the sections are not complete

  @Web
  Scenario Outline: 07_CFU_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_When_BSC_Is_Enabled_Edit_Don't_Cap_My_Bill
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
    And copy text SIM delivery required or not is displayed
    And Validate and click on 'Edit' link
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And copy text SIM delivery required or not is displayed
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                   | password | BillCap       | CapAmount | NewCapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | e2ed14411644@stf.ref.co.uk | test123  | DontCapMyBill | Nill      | Nill         | Enabled   | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |