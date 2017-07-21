Feature: C1924_E11409_TC10_CFA_Displaying_label_in_place_of_only_one_variant_and_displaying_dropdown_for_more_than_one_variant_on_device_details_page_of_smartwatch

  @JulyRelease
  Scenario Outline: CFA Displaying Label in place of only one variant on device details page of smartwatch
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    Then check if the selected connected device has only 1 variant for capacity and dropdown for colour
    And select <color> color of the connected device
    And Click on View all Tariffs

    Examples: 
      | handset  | color  |
      | Iphone5S | Silver |
