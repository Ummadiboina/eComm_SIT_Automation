Feature: C1924_E11409_TC9_CFA_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_handset

  @JulyRelease
Scenario Outline: CFA Displaying Label in place of only one variant on device details page of handset
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    Then check if the selected device has only 1 variant for both colour and capacity
    And Navigate to device details page

    #Close the browser
    Examples: 
      | handset            |
      | BlackBerry Classic |
