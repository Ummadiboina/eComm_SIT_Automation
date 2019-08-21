Feature: 82_ Reg_Jan_CFU_MbbSimo30days

  This scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page

  @Web
  Scenario Outline: CFU_MbbSimo30days
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And I click on 'Sim only Tariff' tab
    #And verify that the url has simo at the end
    #Then the 'Phones' button should be selected by default
    #And click on the 'MBB' button
    #And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And click on the 'MBB' tab
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And the data filters is displayed
    And the 'sorting dropdown' is displayed just below the toggle buttons sections
    And verify that the upfront sort options is not present in the 'sorting dropdown'
    Then I should see data filters buttons next to existing sort drop-down in Upgrade SIMO MBB/Tablet journey <sortoption>
    When I click on respective <filtername> data filter in Upgrade SIMO MBB/Tablet journey
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on selected data filter in the Upgrade SIMO MBB/Tablet journey <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to the selected sort option <sortoption> & filter option <filtername> in Upgrade SIMO MBB/Tablet journey
    When I deselect filter button
    Then I should see appropriate tariffs based on the selected sort option in the Upgrade SIMO MBB/Tablet journey <sortoption>
    #And Click on different <Contract>  Months Tariff in Tab
    #And Click on 'Select' CTA to buy a tariff
    And Select any Random Data Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    #And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And copy text SIM delivery required or not is displayed
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA in Simo upgrade
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract | username                                                | BSCstatus | BillCap       | CapAmount | password | filtername | sortoption                 | Username     | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 30 Days  | stester115ea5dda6-271e-4763-9062-75881b71e085@gmail.com | Enabled   | DontCapMyBill | Nill      | test123  | high       | Monthly data (High to low) | TEST ACCEPTA | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |