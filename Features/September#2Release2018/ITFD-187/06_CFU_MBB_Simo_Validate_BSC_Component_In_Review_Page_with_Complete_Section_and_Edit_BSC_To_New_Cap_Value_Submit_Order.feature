Feature: 06_CFU_MBB_Simo_Validate_BSC_Component_In_Review_Page_with_Complete_Section_and_Edit_BSC_To_New_Cap_Value_Submit_Order

  This scenario ensures when customer on MBB SIMO upgrade journey lands on Review & confirm page should be able to edit BSC component to new cap value and submit the order successfully

  @Web
  Scenario Outline: 06_CFU_MBB_Simo_Validate_BSC_Component_In_Review_Page_with_Complete_Section_and_Edit_BSC_To_New_Cap_Value_Submit_Order
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And Click on 'No thanks, I'll keep my device' button
    #And I click on 'Sim only Tariff' tab
    And click on the 'MBB' button
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate BSC 'Edit' link
    Then I should see 'Your Sim Card'section in upgrade
    And Select 'I’ll keep my current sim' option
    And copy text SIM delivery required or not is displayed
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Validate consumer Bill Spend Caps section when BSC is <NewBillCap>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                      | password | BillCap   | CapAmount | NewBillCap | NewCapAmount | BSCstatus | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | till19037277@stf.ref.o2.co.uk | test123  | CapMyBill | £10       | CapMyBill  | £0           | Enabled   | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |