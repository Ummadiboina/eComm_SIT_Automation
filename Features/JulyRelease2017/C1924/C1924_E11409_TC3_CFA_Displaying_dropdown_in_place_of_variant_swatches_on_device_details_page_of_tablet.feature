Feature: C1924_E11409_TC3_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet

  @JulyRelease
  Scenario Outline: 
    CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    Then check if the selected connected device has more than 1 variant for both colour and capacity
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button

    Examples: 
      | tabletname               | color     | capacity |
      | Apple iPad Pro 10.5 inch | Rose Gold | 256GB    |
