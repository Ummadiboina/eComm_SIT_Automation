Feature: Existing_Refresh_Order_PreOrder_phone_with_Instock_accessory 

@JuneRelease 
Scenario Outline: 
	Existing customer Refresh Order PreOrder phone with Instock accessory 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page, check if the selected device is Pre Order and select <color> 
	And Land on the 'Tariffs and extra' page 
	And Choose some Accesssory 
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text for DD/PreOrder phone in Basket Page 
	And click on "go to checkout" button
	And Select existing account and begin fast checkout 
	And land on the payment page, check stock extended message for <handset> and input <user> and other details for upgrade and click 'Continue on next step' 
	And Continue to Agreements page, check stock extended message for <handset> and confirm all the agreement checks 
	And Continue to Review page, check order contract text, stock extended message for <handset> and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	#Close the browser
	Examples: 
		| handset  | Firstname | Surname | Username     |    color     |
		| AquarisM45 | TEST      | ACCEPTA | TEST ACCEPTA |    black      |