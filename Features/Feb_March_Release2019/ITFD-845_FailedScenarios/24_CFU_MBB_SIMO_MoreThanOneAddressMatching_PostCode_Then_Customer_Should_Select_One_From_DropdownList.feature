Feature: 24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList

  This Scenario ensures that When a MBB Streamlined SIMO Upgrade(SSU)  customer lands on 'Review page' and opt for
  'I need a new sim' option and then clicks on 'Use a different address link' for billing address and enters a postal
  code, if more than one address is matching corresponding to entered postcode then customer should be able to select
  one from the dropdown list

  @Web
  Scenario Outline: 24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And click on the 'MBB' button
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
      | username               | BSCstatus | HouseNumber | PostCode | BillCap   | CapAmount | password | B1     | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | gby22862_163765@o2.com | Enabled   |             | SL11ER   | CapMyBill | £100      | test123  | Select | Not | Select | Not | Enabled    | Connected  | No          | No       |