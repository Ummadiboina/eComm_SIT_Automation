Feature: 26_CFA_New_connection_Phones_GDPR_Disabled_Delivery_Page_Home_Delivery_Donot_show_EndUser_Question

  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: 26_CFA_New_connection_Phones_GDPR_Disabled_Delivery_Page_Home_Delivery_Donot_show_EndUser_Question
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    #select handset with more tariff and less tariff  -- > ask kanban team to set handset with 2 tariff and handset with more than 3 tariff
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs <sortoption>
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>
    ##New functionality ends
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>

    Examples:
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 |consumer| B1       | B2   | B3       | B4      | C1     | C2    | C3  | C4 |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | low        | Monthly data (High to low) |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|

