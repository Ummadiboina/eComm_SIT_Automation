Feature: C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page and selects 'Other tablets' tab, 
  then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in 'Tariff and Extras' Page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Click on Other Tablets tab
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify recommended tariff is getting displayed on the header of the tariff tile in the "Tariffs and Extras" page

    Examples: 
      | username    | password | device_name | default_colour | default_capacity | default_stock_message |
      | ink_jun9198 | test123  | tablet_abc  | grey           | 16GB             | In Stock              | 
