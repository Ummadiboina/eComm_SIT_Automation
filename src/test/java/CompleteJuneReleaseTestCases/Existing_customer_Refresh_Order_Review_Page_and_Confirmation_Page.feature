Feature: Existing customer Refresh Order Review Page and Confirmation Page 
@JuneRelease
Scenario Outline:
Existing customer Refresh Order Review Page and Confirmation Page 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And navigate to PAYM Phones page 
	And I choose PayM <handset>
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page 
	And I Land on the basket page and choose home delivery option 
	And Check for order contract text in Basket Page 
	And click on "go to checkout" button 
	And Select existing account and begin fast checkout 
	And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page, check order contract text and review the order 
	And Check order contract text in Order Confirmation page 
	Then order confirmation is displayed 
	
	Examples: 
		| username    | password | user |
		| ink_jun9198 | test123  | TEST ACCEPTA |
    