Feature: 47_CFU_Phones_Data_filters_options_tariff_and_extras_page

  This scenario ensures that when a customer in upgrade journey selects handset and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    Then Verify that in the recycle value is displayed in the Recycle panel
    #And Select <Make>, <Model> and <Network>
    #And perform update device
    Then Select any one recycle option and click on 'Continue to Upgrade'
    And Select a <handset> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
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
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                         | password | handset           | filtername | sortoption                 | Username     | Make  | Model   | Network | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | testaccepta4289@stf.ref.o2.co.uk | test123  | Samsung Galaxy S8 | low        | Monthly data (Low to High) | TEST ACCEPTA | Apple | Iphone7 | Orange  | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
