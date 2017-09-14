Feature: FreeSim 

@ConsumerShop 
Scenario Outline: FreeSim entering delivery details manually 
	Given I am an CFA user and Lands on shop page 
	And Navigate to FreeSim page 
	And I select 'iPads and Tablets' tab 
	And I select Steady surfer 'ipad sims' 
	And I select 'Enter manually' and provide all valid details in the delivery page 
	Then verify order number is displayed
	
	
	Examples: 
		||
		||