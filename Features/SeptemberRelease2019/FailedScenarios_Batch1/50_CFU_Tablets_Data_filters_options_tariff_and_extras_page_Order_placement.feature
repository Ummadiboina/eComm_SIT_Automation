Feature: 50_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement

  @Web
  Scenario Outline: This scenario ensures that when a customer in upgrade journey selects 'Tablet' and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And Select a <Tablet> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Click on View all Tariffs link in upgrade options page
    And Verify phones tab selected by default
    And Click on Tablet section in upgrade options page
    And Verify tablets vertical upgrade journey is removed or not
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And Navigate to device details page
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs <sortoption>
      #Verification point - A - More than 2 should be displayed
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Tablet                        | Action | color      | Capacity | Surname | BSCstatus | BillCap   | CapAmount | Username     | filtername | sortoption                 | username               | password | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 05ju36757100@stf.ref.o2.co.uk | skip   | Space Grey | 512GB    | ACCEPTA | Enabled   | CapMyBill | £100      | TEST ACCEPTA | high       | Monthly data (High to low) | in01808o_485904@o2.com | test123  | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
