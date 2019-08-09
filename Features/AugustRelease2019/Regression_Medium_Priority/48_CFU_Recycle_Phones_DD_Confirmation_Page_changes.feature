Feature: 48_CFU_Recycle_Phones_DD_Confirmation_Page_changes

  @Web
  Scenario Outline:
  This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,
  then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    # //vertical journey
    #And Select a <handset> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Select ribboned tariff <tariff> in upgrade journey
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    #And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #Then I should see 'Your Sim Card'section
    #And no option should be selected
    #And verify that Confirm CTA is not displayed
    #And verify that copy text 'Your Sim Card'section
    #And verfiy that two option are displayed
    #And verify that 'Sim Swap Form'link is diplayed
    #When I click on 'Sim Swap Form' I should be opned with a new tab
    #And Select a 'I need a sim'option
    #And Verify that 'Confirm CTA' is displayed
    #And Click on 'Confirm CTA'
    #And Click on 'Continue' button on upgrade page at extra section
    #Then Verify that in the recycle value is displayed in the Recycle panel
    #And Select <Make>, <Model> and <Network>
    #And perform update device
    #Then Select any one recycle option and click on 'Continue to Upgrade'
    # //Vertical journey ends
    And Verify phones tab selected by default
    And Verify phones vertical upgrade journey is removed or not
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And check the status <Status> of the device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Select a 'I need a sim'option
    And validate and select recycle option from basket page
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And scroll to an element in DeliveryPage for taking screenshots
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username               | password | BSCstatus | BillCap   | CapAmount | handset   | tariff                  | Firstname | Surname | Username     | Action | Status           | Make  | Model   | Network | consumer | B1  | B2     | B3  | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | in02818o_759850@o2.com | test123  | Enabled   | CapMyBill | £5        | iPhone 6s | 29.99upfront60.34amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Delayed Delivery | Apple | Iphone7 | Orange  | Me       | Not | Select | Not | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |
