Feature: 06_CFU_SimoOnlyTariff_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page

  This scenario ensures that when an upgrade user selects 'Sim only tariffs' tab then customer should not show vertical
  journey in upgrade options page and should see copy "Choose a sim only plan with all the data you need." and Link name
  to be "Pick a sim"

  @Web
  Scenario Outline: 06_CFU_SimoOnlyTariff_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And I click on 'Sim only Tariff' tab
    And Verify Simo vertical upgrade journey is removed or not
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    #Then the 'Phones' button should be selected by default
    And Verify phones, tablet and MBB simo tabs displayed
    And the two contract lenght should be displayed
    And the data filters is displayed
    And Click on 'Select' CTA to buy a phone tariff with <contractLength> contract
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    And copy text SIM delivery required or not is displayed
    And Validate BSC 'Edit' link should not display in Review Page
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section in upgrade
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on GDPR Continue CTA
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download

    Examples:
      | username                      | password | BillCap       | CapAmount | BSCstatus | contractLength |
      | 05ap04812823@stf.ref.o2.co.uk | test123  | DontCapMyBill | Nill      | Enabled   | 12 Months      |

