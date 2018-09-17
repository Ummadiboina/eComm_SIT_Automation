Feature: 16_CFU_PAYM_Phone_Validate_BSC_Component_In_Upgrade_Options_Page_for_Post_Q1_2018_Tariff_When_BSC_Is_Disabled

  This scenario ensures that consumer in Upgrade journey for PAYM Phones with tariff should not be displayed with BSC component in Upgrade options page

  @Web
  Scenario Outline: 16_CFU_PAYM_Phone_Validate_BSC_Component_In_Upgrade_Options_Page_for_Post_Q1_2018_Tariff_When_BSC_Is_Disabled
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    And Validate consumer Bill Spend Caps section when BSC is <Q1TariffBSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And I Land on the basket page by clicking on Add to Basket button
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                      | password | handset  | tariffAmt | dataValue | houseNumber | PostCode | BillCap       | CapAmount | Q1TariffBSCstatus | BSCstatus | Username     | Action    | tariff                   | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | 31ja96389478@stf.ref.o2.co.uk | test123  | iPhone X | £18       | 6GB       | 11          | SL11ER   | DontCapMyBill | Nill      | Disabled          | Enabled   | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |
