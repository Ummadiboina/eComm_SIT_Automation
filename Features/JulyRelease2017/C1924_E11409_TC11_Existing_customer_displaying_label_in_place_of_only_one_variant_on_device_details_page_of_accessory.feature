Feature: C1924_E11409_TC11_Existing_customer_displaying_label_in_place_of_only_one_variant_on_device_details_page_of_accessory 

@JulyRelease 
Scenario Outline: 
	Existing customer displaying label in place of only one variant on device details page of accessory 
	#Given I am existing user and I click on Signin button 
	#And Signin using valid <username> and <password> credentials 
	And Navigate to Accessories 
	And Select <accessoryname> from accessories 
	Then check if the selected device has only 1 variant for both colour and capacity with dropdown 
	And Click on View all Tariffs 
	
	#Close the browser
	Examples: 
		| accessoryname | username   | password |
		| SanDisk Ultra MemoryCard| ins_nov746 | test123  |
