Feature: C1960_ECOM11430_11485_11433_11419_TC2_CFA_Tablets_Show_basecomms_tariffs_on_T&E_page_for_my_offers_journey

  Scenario Outline: This scenario ensures that when the customer in Acquisition Journey lands on My offers page and clicks on 'Other tablets' tab, then the customer should be able to see Basecomm devices associated with basecomm tariffs in device tile and Tariff and extras page
    Given I navigate to the Basecomm Page
    And Click on Other Tablets tab
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Select <color>, <capacity> of the device <device_name>
    #And Verify that promotion ribbon is displayed for <device_name>
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Basecomms page
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Tariffs and Extras Page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on continue shopping button 
    And navigate to PAYM Tablets page
    And I choose <device_name> Tablet
    And Navigate to device details page
    And verify that the Basecomms tariff is not displayed in the Tariff and Extras page

    Examples: 
      | username             | password | device_name                    | default_colour | default_capacity | default_stock_message | color | capacity | user         |
      | 07770001111@o2.co.uk | test123  | Samsung Galaxy Tab A 2016 10.1 | Black          | 16GB             | In Stock              | Black | 16GB     | TEST ACCEPTA |
