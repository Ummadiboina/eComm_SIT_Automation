Feature: C1924_E11409_TC6_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory

  @JulyRelease
  Scenario Outline: 
    Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to Accessories
    And Select <accessoryname> from accessories
    And Navigate to device details page
    Then check if the selected non connected device has more than 1 variant for both colour and capacity
    And select <color> color of the non connected device
    #And select <capacity> capacity of the non connected device
    And Navigate to device details page

    #Close the browser
    Examples: 
      | accessoryname | color | username    | password |
      | Samsung S8 Plus Original LED Cover|Silver| inavl0wx_355207@o2.com | test123  |
