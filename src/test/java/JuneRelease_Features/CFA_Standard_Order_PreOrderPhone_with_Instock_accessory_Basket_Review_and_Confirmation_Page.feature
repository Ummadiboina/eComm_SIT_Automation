Feature: CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page

 @Test3
  Scenario Outline: CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page
    Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page and select <color>
	And Land on the 'Tariffs and extra' page selecting pay device in full
	And Choose some Accesssory
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text for DD/PreOrder phone in Basket Page 
	And click on "go to checkout" button 
	And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button' 
	And land on the payment page and input <Username> and other details and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page, check order contract text and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	#Close the browser
	Examples: 
		| handset  | Firstname | Surname | Username     |    color     |
		| GalaxyS7 | TEST      | ACCEPTA | TEST ACCEPTA |    black      |