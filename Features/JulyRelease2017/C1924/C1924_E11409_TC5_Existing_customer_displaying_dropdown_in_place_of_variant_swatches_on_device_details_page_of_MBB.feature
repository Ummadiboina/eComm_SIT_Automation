Feature: C1924_E11409_TC5_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB

  @JulyRelease
  Scenario Outline: Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to PayM MBB page
    And I choose MBB PayM <MBB>
    And Navigate to device details page
    Then check if the selected connected device has more than 1 variant for both colour and capacity

    # And select <color> color of the connected device
    #And select <capacity> capacity of the connected device
    Examples: 
      | MBB              | color | capacity | username    | password |
      | Huawei 4G Dongle | Black | 64 GB    | inavl0wx_355207@o2.com | test123  |
