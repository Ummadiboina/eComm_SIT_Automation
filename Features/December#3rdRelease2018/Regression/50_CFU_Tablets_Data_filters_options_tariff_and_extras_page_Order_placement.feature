Feature: 50_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement

  @Web
  Scenario Outline: This scenario ensures that when a customer in upgrade journey selects 'Tablet' and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And Navigate to device details page
    #And Select a <Tablet> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Click on View all Tariffs link in upgrade options page
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
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | Tablet | Action | Surname | BSCstatus | BillCap   | CapAmount | Username     | filtername | sortoption                 | username                      | password | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | A3 10  | skip   | ACCEPTA | Enabled   | CapMyBill | £100      | TEST ACCEPTA | low        | Monthly data (Low to High) | 10au66996482@stf.ref.o2.co.uk | test123  | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |
