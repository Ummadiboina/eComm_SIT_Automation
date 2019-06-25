Feature: 45_Reg_CFU_ordering choice on upgrade options page_Phone_option_not selected

  @Web
  Scenario Outline: This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA

    #//Vertical journey starts//
    #And Select a <handset> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Select a tariff <tariff>
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    #And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #Then I should see 'Your Sim Card'section
    #And no option should be selected
    #And verify that Confirm CTA is not displayed
    #And verify that copy text 'Your Sim Card'section
    #And verfiy that two option are displayed
    #And verify that 'Sim Swap Form'link is diplayed
    #When I click on 'Sim Swap Form' I should be opned with a new tab
    #And Select a 'I dont need a new sim'option
    #And Verify that 'Confirm CTA' is displayed
    #And Click on 'Confirm CTA'
    #And Click on 'Continue' button on upgrade page at extra section
    #And I Land on the basket page by clicking on Add to Basket button
    # //Vertical journey ends//

    And Verify phones tab selected by default
    And Verify phones vertical upgrade journey is removed or not
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And click on "go to checkout" button
    #And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And perform <Action> in OTAC page
    #And Click on the 'Continue button' in delivery page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                     | password | handset       | BSCstatus | BillCap       | CapAmount | Username     | Action | tariff                   | consumer | B1  | B2  | B3     | B4  | Text | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | ini_jan9054@stf.ref.o2.co.uk | test123  | iPhone 8 Plus | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | skip   | 129.99upfront37.00amonth | Someone  | Not | Not | Select | Not | Not  | Not   | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |
