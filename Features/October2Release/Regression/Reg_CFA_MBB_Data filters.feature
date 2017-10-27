Feature: CFA_MBB_Data filters
  This scenario ensures that when a customer in acquisition journey selects 'MBB' and navigates to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web @OctoberReleasePhase1
  Scenario Outline: CFA_MBB_Data filters
    Given I am an CFA user and Lands on shop page
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>

    ##New functionality ends
    Examples:
      | Device_Name   | Firstname | Surname | Username     | filtername | sortoption                 |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | high       | Monthly data (Low to High) |
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |
