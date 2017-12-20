Feature: CFU_PhonesSimo30day
  This scenario ensures that an upgrade customer is able to select a 30 day tariff under the simo tab in upgrade options page
  @Web
  Scenario Outline: CFU_PhonesSimo30day
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And if Timer is configured then it should be displayed
    And if <GiftBlock> is configured then display the banner
    And verify that 'Why choose an O2 Pay Monthly sim?' is not displayed in upgrade options page
    And the data filters is displayed
    When I click on respective <filterSort> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <Tariffsortoption>
    And the 'sorting dropdown' is displayed just below the toggle buttons sections
    And verify that the upfront sort options is not present in the 'sorting dropdown'
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>
    And Click on different <Contract>  Months Tariff in Tab
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed

    Examples:
    |Contract|GiftBlock |username|password|filtername|sortoption                 |sort|
    |12 Days |Configured|       |         |high      | Monthly data (Low to High)|    |

