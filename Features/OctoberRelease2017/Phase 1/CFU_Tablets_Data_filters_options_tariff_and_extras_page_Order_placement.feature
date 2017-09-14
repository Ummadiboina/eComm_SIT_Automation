Feature: CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement
  This scenario ensures that when a customer in upgrade journey selects 'Tablet' and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @OctoberReleasePhase1
  Scenario Outline: CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed
    When I click on respective data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter
    And If I select ANY sort option from the drop-down
    Then I should see tariffs relevant to selected sort option & filter option
    When I deselect filter button
    Then I should see tariffs based on the selected sort option
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | username   | password | handset  | Firstname | Surname | Username     | Action |
      | ins_nov746 | test123  | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | skip   |