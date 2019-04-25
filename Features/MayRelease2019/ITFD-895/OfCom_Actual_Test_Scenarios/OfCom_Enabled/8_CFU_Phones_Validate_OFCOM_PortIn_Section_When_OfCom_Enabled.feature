Feature: 8_CFU_Phones_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline: 8_CFU_Phones_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | username                      | password | handset       | BSCstatus | BillCap       | CapAmount | Username     | Action    | tariff                   | journey | ofComStatus | codeStatus | ofComMobileNum | pacStacCode |
      | till51074963@stf.ref.o2.co.uk | test123  | iPhone 8 Plus | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | CFU     | Enabled     | Nill       | Nill           | Nill        |
