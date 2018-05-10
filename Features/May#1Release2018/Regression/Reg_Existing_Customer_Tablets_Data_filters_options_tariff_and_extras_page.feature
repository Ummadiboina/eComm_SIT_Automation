Feature: Reg_Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page.feature

  This scenario ensures that when a customer in Existing customer journey selects 'Tablet' and navigated to tariff page ,then the customer
  should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web

  Scenario Outline: Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
   # And select <color> color of the connected device
   # And select <capacity> capacity of the connected device
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

    Examples:
      | tabletname    | color     | capacity | filtername | sortoption                 | username                      | password |
      | Random Device | Rose Gold | 32GB     | low        | Monthly data (Low to High) | 27fe76531842@stf.ref.o2.co.uk | test123  |
