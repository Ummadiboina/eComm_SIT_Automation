Feature: CFA_SIMO_Phone_Data_filters_options_Order_placement
  This scenario ensures that when a customer in acquisition journey selects 'SIMO' 
  tariff for phones ,then the customer should be able to see  'Data filter' button

  @OctoberReleasePhase1
  Scenario Outline: CFA_SIMO_Phone_Data_filters_options_Order_placement
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    Then I should see data filters buttons for SIMO tariffs
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    #And If I select ANY sort option from the drop-down
    #Then I should see tariffs relevant to selected sort option & filter option
    When I deselect filter button
    Then I should see default tariff lists
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 | Contract |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | high       | Monthly data (Low to High) | 30 Days  |
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |
