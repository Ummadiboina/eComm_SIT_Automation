Feature: 48_CFU_Recycle_Phones_DD_Confirmation_Page_changes

  @Web
  Scenario Outline:
  This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,
  then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select ribboned tariff <tariff> in upgrade journey
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And verify that 'Sim Swap Form'link is diplayed
    When I click on 'Sim Swap Form' I should be opned with a new tab
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    #And Select a tariff in upgrade journey
    #And I Land on the basket page for upgrades
    Then Verify that in the recycle value is displayed in the Recycle panel
    And Select <Make>, <Model> and <Network>
    And perform update device
    Then Select any one recycle option and click on 'Continue to Upgrade'
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                                                | password | BSCstatus | BillCap   | CapAmount | handset       | tariff                  | Firstname | Surname | Username     | Action | Status           | Make  | Model   | Network | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | stester117bb1fde1-8d4a-4e95-a619-d2adffcd4e5f@gmail.com | test123  | Enabled   | CapMyBill | £5        | iPhone Xs Max | 29.99upfront60.34amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Delayed Delivery | Apple | Iphone7 | Orange  | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | No          |
