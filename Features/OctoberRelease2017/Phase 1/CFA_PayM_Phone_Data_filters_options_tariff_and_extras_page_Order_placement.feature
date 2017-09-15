Feature: CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement
  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then 
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @OctoberReleasePhase1
  Scenario Outline: CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #select handset with more tariff and less tariff  -- > ask kanban team to set handset with 2 tariff and handset with more than 3 tariff
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs
    When I click on respective data filter 
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter
    And If I select ANY sort option from the drop-down
    Then I should see tariffs relevant to selected sort option & filter option
    When I deselect filter button
    Then I should see tariffs based on the selected sort option
    ##New functionality ends
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | handset  | Firstname | Surname | Username     |
      | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA |
      | Iphone8  | TEST      | ACCEPTA | TEST ACCEPTA |
