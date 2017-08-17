Feature: C1786_E-11510-11505_TC4_Other_Tablets_Basecomm_tariff_basket_page_change_tariff_link

  Scenario Outline: This scenario ensures that when the existing customer selects basecomms "Other Tablets" tariff lands on basket page and clicks on "Change tariff" ,
    then the customer should be redirected to tariffs and extras page with basecomms tariffs

    #Given I am existing user and I click on Signin button
    #And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Click on Other Tablets tab
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Verify "Choose a different tariff" link is displayed
    And click on the "Choose a different tariff" link and verify user navigated back to "Tariff and Extras" page

    Examples: 
      | username             | password | device_name                    | default_colour | default_capacity | default_stock_message |
      | inavl0wx_355207@o2.com | test123  | Samsung Galaxy Tab A 2016 10.1 | Black          | 16GB             | In Stock              |
