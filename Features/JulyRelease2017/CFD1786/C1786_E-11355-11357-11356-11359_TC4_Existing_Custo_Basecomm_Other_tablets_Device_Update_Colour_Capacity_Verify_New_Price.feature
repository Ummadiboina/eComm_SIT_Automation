Feature: C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price 

Scenario Outline:
This scenario ensures that when the existing customer on new basecomm page selects "Other Tablets" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And I navigate to the Basecomm Page 
	And Click on Other Tablets tab 
	And Verify the contents of the tablet section in the Other Tablets tab 
	#verify that URL is specific to tablet
	And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message> 
	#Veirfy device price details are also getting displayed in the above step
	And Select <color>, <capacity> of the device <device_name> 
	And Verify the price gets updated based on <oldcapacity>, <newcapacity> for <device_name> 
	And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed 
	
	Examples: 
		| username             | password | device_name                    | default_colour | default_capacity | default_stock_message | color | capacity |oldcapacity|newcapacity|
		| inavl0wx_355207@o2.com | test123  | Samsung Galaxy Tab A 2016 10.1 | Black          | 16GB             | In Stock              | Black | 16GB     |16GB|16GB|
