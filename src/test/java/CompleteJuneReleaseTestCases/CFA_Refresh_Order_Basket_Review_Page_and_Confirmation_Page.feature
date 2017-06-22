Feature: CFA Refresh Order Basket Review Page and Confirmation Page 

@JuneReleaseTest1
Scenario Outline: CFA Refresh Order Basket Review Page and Confirmation Page 
	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page 
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text in Basket Page 
	And click on "go to checkout" button 
	And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button' 
	And land on the payment page and input <Username> and other details and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page, check order contract text and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	#Close the browser
	Examples: 
		| handset  | Firstname | Surname | Username     |
		| Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA |
