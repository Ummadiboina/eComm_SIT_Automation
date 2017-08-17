Feature: C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature

 Scenario Outline: 
	This scenario ensures that when the existing customer lands on new basecomm page selects "Tablet" device ,then the device tile for the 'coming soon' basecomms device should be displayed with the following information:

 	1.Device image
    2.Device title
    3.Colour
    4.Capacity
    5."See device details" link
    6.Pricing information should NOT be displayed
    7.Buy Now button NOT be displayed

	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And I navigate to the Basecomm Page 
	And Click on Other Tablets tab
	And Verify expected "coming soon" <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message> 
	#Veirfy device price is not required
    #Verify Buy Now button is not enabled
 	And Verify that promotion ribbon is displayed for <device_name> 
 	And Click on "See device details" link for <device_name> and verify correct details are displayed 
 	
 	Examples: 
 		| username             | password | device_name |default_colour| default_capacity | default_stock_message |
 		| inavl0wx_355207@o2.com| test123  | Samsung Galaxy Tab S3 9.7 | Black| 32GB | Coming Soon|