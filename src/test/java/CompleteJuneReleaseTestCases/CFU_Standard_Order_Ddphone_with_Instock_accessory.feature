Feature: CFU_Standard_Order_Ddphone_with_Instock_accessory 

@JuneRelease
Scenario Outline: 
	CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to upgrade phone 
	And I choose upgrade PayM <handset> 
	And Navigate to device details page, check if the selected device is Delayed Delivery and select <color>
	And Land on the 'Tariffs and extra' page selecting pay device in full
	And Choose some Accesssory
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text in Basket Page 
	And click on "go to checkout" button 
	And Select existing account and begin fast checkout 
	And land on the payment page, check stock extended message for <handset> and input <user> and other details for upgrade and click 'Continue on next step' 
	And Continue to Agreements page, check stock extended message for <handset> and confirm all the agreement checks 
	And Continue to Review page, check order contract text, stock extended message for <handset> and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	
	#Close the browser
	Examples: 
		| handset  | user    | username | password | color |
		| GalaxyS7 | TEST ACCEPTA | ink_jun9198 | test123 | pink |
