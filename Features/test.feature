Feature: CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement
  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then 
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

 Scenario Outline: CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    #select handset with more tariff and less tariff  -- > ask kanban team to set handset with 2 tariff and handset with more than 3 tariff
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter
    And If I select ANY sort option <sortoption> from the drop-down
    ## Then I should see tariffs relevant to selected sort option & filter option
    When I deselect filter button
    ## Then I should see tariffs based on the selected sort option
    ##New functionality ends
  
   
    Examples: 
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | high       | Monthly data (High to low) |
