Feature: C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification 

Scenario Outline:
This scenario ensures that when the existing customer lands on new basecomm page and selects "iPad" tab,then the customer should be able to see the following 

	1.Delayed delivery status on device tile
    2.Clicking "Back to iPad offers" link should take the customer to basecomms listing page

	#Given I am existing user and I click on Signin button
	#And Signin using valid <username> and <password> credentials
	And I navigate to the Basecomm Page 
	#And Verify the contents of the iPad section in the landing page
	#Verify URL is iPad specific
	And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message> 
	And Select <color>, <capacity> of the device <device_name> 
	#Veirfy device price details are also getting displayed in the above step
	And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed 
	Then click on the "Back to iPad offers" link and verify user gets redirected to Basecomms listing page 
	
	Examples: 
		| username             | password | device_name       | default_colour | default_capacity | default_stock_message |color|capacity|stock_message|
		| 07770001111@o2.co.uk | test123  | Apple iPad mini 4 | Silver   | 32GB  | In Stock |Space Grey|128GB|Home delivery|