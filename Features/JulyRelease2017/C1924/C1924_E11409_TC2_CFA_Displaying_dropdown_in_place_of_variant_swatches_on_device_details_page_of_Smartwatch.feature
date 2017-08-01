Feature: C1924_E11409_TC2_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_smartwatch

  @JulyRelease
  Scenario Outline: CFA Displaying dropdown in place of variant swatches on device details page of smartwatch
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And I choose <smartwatchname> Smartwatch
    Then check if the selected non connected device has more than 1 variant for colour and single variant for capacity
    And select <color> color of the non connected device
    And Navigate to device details page

    #And select <capacity> capacity of the non connected device
    Examples: 
      | smartwatchname      | color  |
      | Samsung Galaxy Gear | Orange |