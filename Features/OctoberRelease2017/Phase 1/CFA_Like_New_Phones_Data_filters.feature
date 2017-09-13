Feature: CFA_Like_New_Phones_Data_filters
  This scenario ensures that when a customer in an acquisition  journey selects 'Like new device' and navigates to 
  tariff page ,then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  #####This may be deprecated
  @OctoberReleasePhase1
  Scenario Outline: CFA_Like_New_Phones_Data_filters
    Given I am an CFA user and Lands on shop page
    And navigate to Like New Phones page
    And I select to buy a like new simfree <handset>
    And select <SimType> in details page
    #select handset with more tariff and less tariff  -- > ask kanban team to set handset with 2 tariff and handset with more than 3 tariff
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed
    When I click on respective data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter
    And If I select ANY sort option from the drop-down
    Then I should see tariffs relevant to selected sort option & filter option
    When I deselect filter button
    Then I should see tariffs based on the selected sort option

    ##New functionality ends
    Examples: 
      | handset  | Firstname | Surname | Username     | SimType |
      | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | PayM    |
