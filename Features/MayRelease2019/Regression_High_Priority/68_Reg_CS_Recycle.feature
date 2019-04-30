Feature: 68_Reg_CS_Recycle

  @Web

  Scenario Outline: This scenario ensures that the customer is able to recycle and upgrade
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    ##And Select ribboned tariff <tariff> in upgrade journey
    And Select tariff in upgrade journey
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
    Then Verify that in the recycle value is displayed in the Recycle panel
    #And Select 'Not your device' option
    And Select <Make>, <Model> and <Network>
    And perform update device
    Then Select any one refundable recycle option
    And Verify 'Yes,get an accurate quote' is displayed
    And click on 'Yes,get an accurate quote'
    And answer the questionnaire and click on 'Accept and continue to upgrade' button
    And I Land on the basket page for upgrades
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Click on the 'Continue button' in delivery page
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | password | handset  | BSCstatus | BillCap   | CapAmount | tariff                  | Firstname | Surname | Username     | Action | Make  | Model   | Network | consumer | B1     | B2     | B3     | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 19fe59593090@stf.ref.o2.co.uk | test123  | iPhone 7 | Enabled   | CapMyBill | £10       | 29.99upfront46.00amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Apple | Iphone7 | Orange  | Me       | Select | Select | Select | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |
