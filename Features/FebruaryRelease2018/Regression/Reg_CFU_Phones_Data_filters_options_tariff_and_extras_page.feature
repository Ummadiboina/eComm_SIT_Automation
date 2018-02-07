Feature: CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement
  This scenario ensures that when a customer in upgrade journey selects 'Tablet' and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    Then Select any one recycle option and click on 'Continue to Upgrade'
    And Select a <handset> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>

    Examples:
      | username      | password | handset           | filtername | sortoption                 |
      | hsty@gail.com | test123  | Samsung Galaxy S8 | high       | Monthly data (Low to High) |
