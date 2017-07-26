Feature:
C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification 

Scenario Outline:
This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following 

	In basecomm device tile:
    1.Device image
    2.Rating
    3.Colour dropdown
    4.Capacity dropdown
    5.Promotional ribbons(Blue ribbons if configured for the tariff)
    6.Pricing
    7."Buy now" button
    8."See device details" link
    9.Stock message
    
    In Tariff and extras Page:
    1."Back to tablet offers" link 
    2. Basecomms offer tariffs

	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And I navigate to the Basecomm Page 
	And Click on Other Tablets tab 
	#And Verify the contents of the tablet section in the Other Tablets tab
	#verify that URL is specific to tablet
	And Verify only tablet specific devices are displayed under the Other tablets section 
	And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message> 
	#Veirfy device price details are also getting displayed in the above step
	And Select <color>, <capacity> of the device <device_name> 
	And Click on "See device details" link for <device_name> and verify correct details are displayed 
	And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed 
	And Verify Pay As You Go tab is not displayed 
	And Verify all the details and links are displayed and working as expected in the Tariffs and Extras page <device_name> 
	
	Examples: 
		| username             | password | device_name                    | default_colour | default_capacity | default_stock_message | color | capacity |
		| 07770001111@o2.co.uk | test123  | Samsung Galaxy Tab A 2016 10.1 | Black          | 16GB             | In Stock              | Black | 16GB     |
