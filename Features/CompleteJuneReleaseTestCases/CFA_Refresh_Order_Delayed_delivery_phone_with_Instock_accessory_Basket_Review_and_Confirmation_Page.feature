Feature: CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page

@JuneRelease
Scenario Outline: 
	CFA Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page 
	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page, check if the selected device is Delayed Delivery and select <color>
	And Land on the 'Tariffs and extra' page selecting pay device in full
	And Choose some Accesssory
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text for DD/PreOrder phone in Basket Page 
	And click on "go to checkout" button 
	And Input <Firstname> and <Surname> and other valid details in Delivery page 
	And Check stock extended message for <handset> 
	And Click on Continue button 
	And land on the payment page, check stock limited message for <handset> and input <username> and other details and click 'Continue on next step' 
	And Continue to Agreements page, check stock extended message for <handset> and confirm all the agreement checks
	And Continue to Review page, check order contract text, stock extended message for <handset> and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	#Close the browser
	Examples: 
		| handset  | Firstname | Surname | Username     |    color     |
		| GalaxyS7 | TEST      | ACCEPTA | TEST ACCEPTA |    pink      |
