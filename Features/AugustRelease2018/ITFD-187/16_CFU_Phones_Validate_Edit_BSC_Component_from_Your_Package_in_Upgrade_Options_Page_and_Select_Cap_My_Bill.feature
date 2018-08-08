Feature: 16_CFU_Phones_Validate_Edit_BSC_Component_from_Your_Package_in_Upgrade_Options_Page_and_Select_Cap_My_Bill

  This scenario ensures that consumer in upgrade journey of phone with tariff is able to edit the BSC component from
  your package section and select cap my bill and place the order successfully

  @Web
  Scenario Outline: 16_CFU_Phones_Validate_Edit_BSC_Component_from_Your_Package_in_Upgrade_Options_Page_and_Select_Cap_My_Bill
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on 'Edit' link
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                     | password | handset  | BillCap   | CapAmount | NewCapAmount | BSCstatus | Username     | Action | tariff                   | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | ins_feb8544@stf.ref.o2.co.uk | test123  | iPhone X | CapMyBill | £5        | £10          | Enabled   | TEST ACCEPTA | skip   | 129.99upfront37.00amonth | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |
