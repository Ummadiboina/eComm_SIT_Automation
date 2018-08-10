Feature: 08_CFU_Validate_BSC_Component_In_Review_Page_with_Complete_Section_When_BSC_Is_Enabled_Cap_My_Bill_Submit_Order

  This scenario ensures when customer on SIMO upgrade journey lands on Review & confirm page and selects Cap my bill
  option under BSC, then place your order CTA should be enabled when all the section are completed

  @Web
  Scenario Outline: 08_CFU_Validate_BSC_Component_In_Review_Page_with_Complete_Section_When_BSC_Is_Enabled_Cap_My_Bill_Submit_Order
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
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                   | password | BillCap   | CapAmount | NewCapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | e2ed14411644@stf.ref.co.uk | test123  | CapMyBill | £10       | Nill         | Enabled   | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |