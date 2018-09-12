Feature: 73_Existing_Csutomer_Tablets_Data_filters_options_tariff_and_extras_page

  This scenario ensures that when a customer in Existing customer journey selects 'Tablet' and navigated to tariff page ,then the customer
  should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web

  Scenario Outline: Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
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
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    #And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details for existing customer
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | tabletname        | color     | capacity | filtername | sortoption                 | username                      | password | Username     | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy Tab S3 9.7 | Rose Gold | 32GB     | low        | Monthly data (Low to High) | acce22706990@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
