Feature: 140_CFU_Phone_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected

  This Scenario ensures that When a Phone Streamlined SIMO Upgrade(SSU)  customer lands on 'Review page' and opt for
  'I need a new sim' option and then clicks on 'Use a different address link' for billing address and enters a postal
  code, if only one address is matching corresponding to entered postcode then it should be auto selected

  @Web
  Scenario Outline: 140_CFU_Phone_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And verify that the url has simo at the end
    #Then the 'Phones' button should be selected by default
    #And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And the two contract lenght should be displayed
    And the data filters is displayed
    And Click on 'Select' CTA to buy a phone tariff with <contractLength> contract
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    And copy text SIM delivery required or not is displayed
    And Select 'I need a new sim' option
    And Click on 'Use a different delivery address'link in upgrade simo journey
    And perform <Action> in OTAC page in upgrade simo journey
    And enter <houseNumber> and <postCode> in Delivery section to set different delivery address
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA in Simo upgrade
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | contractLength | Action | username               | BSCstatus | houseNumber | postCode | BillCap   | CapAmount | password | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 12 Months      | enter  | in01808o_388540@o2.com | Enabled   |             | SL33FP   | CapMyBill | £20       | test123  | Select | Not | Select | Not | Enabled    | Connected  | Yes         | No       |