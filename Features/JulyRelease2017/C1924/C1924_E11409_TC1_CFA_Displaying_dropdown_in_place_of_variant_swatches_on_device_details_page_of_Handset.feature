Feature: C1924_E11409_TC1_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_handset

  @JulyRelease
  Scenario Outline: CFA Displaying dropdown in place of variant swatches on device details page of handset
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    Then check if the selected connected device has more than 1 variant for both colour and capacity
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Navigate to device details page

    #Close the browser
    Examples: 
      | handset        | color | capacity |
      | Apple iPhone 7 | Black | 128GB    |
