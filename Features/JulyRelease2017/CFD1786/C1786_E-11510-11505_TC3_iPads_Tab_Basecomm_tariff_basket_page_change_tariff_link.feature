Feature: C1786_E-11510-11505_TC3_iPads_Tab_Basecomm_tariff_basket_page_change_tariff_link.feature

  Scenario Outline: This scenario ensures that when the existing customer selects basecomms "iPad" tariff lands on basket page and clicks on "Change tariff" ,
    then the customer should be redirected to tariffs and extras page with basecomms tariffs

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Verify "Choose a different tariff" link is displayed
    And click on the "Choose a different tariff" link and verify user navigated back to "Tariff and Extras" page

    Examples: 
      | username             | password | device_name | default_colour | default_capacity | default_stock_message | color | capacity | user         |
      | 07770001111@o2.co.uk | test123  | iPad Air 2  | Space Grey     | 16GB             | In Stock              | white | 128GB    | TEST ACCEPTA |
