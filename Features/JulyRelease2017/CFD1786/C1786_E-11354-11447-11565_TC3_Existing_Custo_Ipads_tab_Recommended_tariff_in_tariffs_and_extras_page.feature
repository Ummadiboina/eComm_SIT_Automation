Feature: C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page and selects 'iPads' tab,
    then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in 'Tariff and Extras' Page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify recommended tariff is getting displayed on the header of the tariff tile in the "Tariffs and Extras" page

    Examples: 
      | username             | password | device_name       | default_colour | default_capacity | default_stock_message |
      | 07770001111@o2.co.uk | test123  | Apple iPad mini 3 | Space Grey     | 16GB             | In Stock              |
