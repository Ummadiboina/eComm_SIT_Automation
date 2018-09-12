Feature: 13_CFU_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Cap_My_Bill_and_Validate_Values

  This scenario ensures that consumer in upgrade journey of MBB with tariff is able to edit the BSC component from Basket page and select cap my bill and place the order successfully

  @Web
  Scenario Outline: 13_CFU_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Cap_My_Bill_and_Validate_Values
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on MBB section in upgrade options page
    And Select a <MBB Device> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page by clicking on Add to Basket button
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap>
    And Choose your bill cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                     | password | MBB Device | houseNumber | PostCode | BillCap   | CapAmount         | BillCap   | NewCapAmount | BSCstatus | Username     | Action    | tariff                   | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | ins_feb8544@stf.ref.o2.co.uk | test123  | dongle     | 11          | SL11ER   | CapMyBill | DontCapMyBillLink | CapMyBill | £5           | Enabled   | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |
