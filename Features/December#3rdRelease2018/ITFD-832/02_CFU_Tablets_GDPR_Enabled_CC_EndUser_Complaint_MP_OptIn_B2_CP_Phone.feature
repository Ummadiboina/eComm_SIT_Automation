Feature: 02_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B2_CP_Phone

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Tablet' and placed an order as an End user ,then the customer should be displayed with MP - B2 and CP - Phone selected in default in Order confirmation page

  @Web
  Scenario Outline: 02_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B2_CP_Phone
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And verify that 'Sim Swap Form'link is diplayed
    When I click on 'Sim Swap Form' I should be opned with a new tab
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    #And I Land on the basket page by clicking on Add to Basket button
    And I Land on the basket page and choose to collect from store
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                     | password | Firstname | Surname | BSCstatus | BillCap   | CapAmount | Tablet             | Username     | Action    | consumer | B1  | B2     | B3  | B4  | Text | Email | Phone  | Post | status  | MBBStatus | DeviceType | PreSelected |
      | ink_jun6562@stf.ref.o2.co.uk | test123  | Test      | Accepta | Enabled   | CapMyBill | £30       | iPad 9.7 inch 2018 | TEST ACCEPTA | enterCode | Me       | Not | Select | Not | Not | Not  | Not   | Select | Not  | Enabled | No        | Connected  | Yes         |
