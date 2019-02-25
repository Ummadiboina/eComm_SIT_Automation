Feature: 15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage

  This Scenario ensures that when an upgrade  Customer selects 'PAYM Tablets' and lands on 'Payment page' and clicks on
  'Use a different address link' for billing address then customer should see the copy 'House number or name (optional)'
  instead of 'House number or name*' and having blank values for house number and postal code fields and clicks on 'Find
  Address' CTA to search address then validation error should be present only for postal code field and not for house
  number/name field  as its optional now

  @Web
  Scenario Outline: 15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage
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
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on 'Use a different delivery address'link
    And enter <HouseNumber> and <PostCode> in Delivery section to set different delivery address
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And Continue to Agreements page and confirm all the agreement checks
    #And Continue to Review page and review the order
    #Then order confirmation is displayed
    #Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username               | password | HouseNumber | PostCode | tariff | BSCstatus | BillCap   | CapAmount | Tablet             | Username     | Action    | B1  | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | inavl0ww_555130@o2.com | test123  |             |          |        | Enabled   | CapMyBill | £10       | iPad 9.7 inch 2018 | TEST ACCEPTA | enterCode | Not | Not | Select | Not | Enabled    | Connected  | Yes         | No       |
