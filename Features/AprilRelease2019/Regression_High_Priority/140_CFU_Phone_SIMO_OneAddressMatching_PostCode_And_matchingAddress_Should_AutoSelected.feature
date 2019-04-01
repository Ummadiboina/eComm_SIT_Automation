Feature: 22_CFU_Phone_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected

  This Scenario ensures that When a Phone Streamlined SIMO Upgrade(SSU)  customer lands on 'Review page' and opt for
  'I need a new sim' option and then clicks on 'Use a different address link' for billing address and enters a postal
  code, if only one address is matching corresponding to entered postcode then it should be auto selected

  @Web
  Scenario Outline: 22_CFU_Phone_SIMO_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select 'I need a new sim' option
    And Click on 'Use a different delivery address'link
    And enter <HouseNumber> and <PostCode> in Delivery section to set different delivery address
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | username                      | BSCstatus | HouseNumber | PostCode | BillCap   | CapAmount | password | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | 14ju17712307@stf.ref.o2.co.uk | Enabled   |             | SL33FP   | CapMyBill | £20       | test123  | Select | Not | Select | Not | Enabled    | Connected  | Yes         | No       |