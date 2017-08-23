Feature: CFU_Basket page cross sell insurance 

Scenario Outline: 
	This scenario ensures that when the customer has not selected any insurance and has reached the basket page then the cheapest insurance should be shown to cross sell

	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to upgrade phone 
	And I choose upgrade PayM handset <handset> 
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page 
	And deselect if any insurance is autoselected 
	And verify that the insurance is in a sorted order 
	And I Land on the basket page by clicking on Add to Basket button 
	And verify that the cheapest insurance is shown to crossell in the basket page 
	And verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page 
	And click on the "Add now" button and verify Insurance gets added successfully
	
	Examples: 
		|username|password|handset|
		|  |  |