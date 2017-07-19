Feature: C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price

  Scenario Outline: 
  
  This scenario ensures that when the existing customer on new basecomm page selects "iPads" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated
   

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify the contents of the iPad section in the landing page
    #Verify URL is iPad specific
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    Then Verify the price gets updated based on the new colour and capacity
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed 
    

    Examples: 
      | username             | password | device_name       | default_colour | default_capacity | default_stock_message | colour |
      | 07770001111@o2.co.uk | test123  | Apple iPad mini 3 | Space Grey     | 16GB             | In Stock              | white  |
