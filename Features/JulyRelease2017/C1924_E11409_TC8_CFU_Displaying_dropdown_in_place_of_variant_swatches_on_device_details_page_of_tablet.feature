Feature: C1924_E11409_TC8_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet

  @JulyRelease
  Scenario Outline: CFU Displaying dropdown in place of variant swatches on device details page of handset
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade tablet
    And I choose upgrade PayM <tabletname> tablet
    And Navigate to device details page
    Then check if the selected connected device has more than 1 variant for both colour and capacity
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device

    #Close the browser
    Examples: 
      | tabletname     | color | capacity | username    | password |
      | Apple iPad 9.7 | Black | 64 GB    | ink_jun9198 | test123  |