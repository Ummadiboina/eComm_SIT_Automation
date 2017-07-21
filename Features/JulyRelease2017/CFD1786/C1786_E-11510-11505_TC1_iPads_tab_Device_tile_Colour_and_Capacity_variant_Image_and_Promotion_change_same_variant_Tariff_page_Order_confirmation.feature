Feature: C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page selects "iPads" tab and Change the Variant of the device,
    then the image and promotion should be changed according to the selected variant and same variant should be selected in 'Tariffs' page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Verify that promotion ribbon is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Basecomms page
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Tariffs and Extras Page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Modify the above step to include pdf download
    #make sure that device is ipad air 2 else validation fails for promotion
    Examples: 
      | username             | password | device_name             | default_colour | default_capacity | default_stock_message | color  | capacity | user         |
      | 07770001111@o2.co.uk | test123  | Apple iPad Pro 9.7 inch | Space Grey     | 32GB             | Out of stock          | Silver | 128GB    | TEST ACCEPTA |
