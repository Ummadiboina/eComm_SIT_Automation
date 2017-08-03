Feature: C1924_E11409_TC12_CFU_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_tablet 

@JulyRelease 
Scenario Outline:
CFU Displaying label in place of only one variant on device details page of tablet 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to upgrade phone 
	And I choose upgrade PayM handset <handset> 
	Then check if the selected device has only 1 variant for both colour and capacity 
	And Click on View all Tariffs 
	
	#Close the browser
	Examples: 
		| handset | username   | password |
		| Samsung Galaxy J3 2016 Like New | ing_apr5953 | test123  |
