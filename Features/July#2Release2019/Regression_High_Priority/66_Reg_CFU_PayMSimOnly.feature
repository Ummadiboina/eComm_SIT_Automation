Feature: 66_Reg_CFU_PayMSimOnly
  This scenario ensures that an upgrade customer is able to select a 30 day tariff under the simo tab in upgrade options page

  @Web
  Scenario Outline: CFU_PhonesSimo30day
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And I click on 'Sim only Tariff' tab
    #And verify that the url has simo at the end
    #Then the 'Phones' button should be selected by default
    #And the two contract lenght should be displayed
    #And all the tariffs under twelve months should be displayed
    #And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And the two contract lenght should be displayed
    And if Timer is configured then it should be displayed
    And if <GiftBlock> is configured then display the banner
    And verify that 'Why choose an O2 Pay Monthly sim' is not displayed in upgrade options page
    And the data filters is displayed
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And the 'sorting dropdown' is displayed just below the toggle buttons sections
    And verify that the upfront sort options is not present in the 'sorting dropdown'
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>
    #And Click on different <Contract>  Months Tariff in Tab
    #And Click on 'Select' CTA to buy a tariff
    And Click on 'Select' CTA to buy a phone tariff with <contractLength> contract
    #And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And copy text SIM delivery required or not is displayed
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
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
      | contractLength | GiftBlock  | username                      | BSCstatus | BillCap   | CapAmount | Username     | password | filtername | sortoption                 | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 30 Days        | Configured | 10oc12392042@stf.ref.o2.co.uk | Enabled   | CapMyBill | £30       | TEST ACCEPTA | test123  | high       | Monthly data (Low to High) | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |