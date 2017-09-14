Feature: C1669_E11522_TC1_CFA_morethan12Tablet 

@Test 
Scenario Outline: E11522_CFA_MoreThan12Accessory_Tablet 
	Given I am an CFA user and Lands on shop page 
	And Navigate to Accessories 
	And Select <accessoryname> from accessories
	And add quantity of accessories to basket within <limit1> in details page and navigate to basket
	And Verify the device <accessoryname> in basket
	And click on continue shopping button
	And Navigate to Fitness Trackers 
	And I choose <fitnesstrackername> FitnessTracker
	And add quantity of FitnessTracker to basket within <limit2> in details page and navigate to basket
	And Verify the devices <accessoryname> and <fitnesstrackername> in basket
	And calculate the total quantity of devices added to basket 
	And click on continue shopping button 
	And navigate to PAYM Tablets page 
	And I choose <tabletname> Tablet 
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page 
	And Choose Accesssory 
	And I Land on the basket page by clicking on Add to Basket button
	And the previously selected standalone non-connected items should be removed from my basket 
	And click on "go to checkout" button 
	And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button' 
	And land on the payment page and input <Username> and other details and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page and review the order 
	Then order confirmation is displayed 
	
	Examples: 
		| Firstname | Surname | Username     | limit1 | tabletname|limit2|accessoryname|fitnesstrackername|
		| TEST      | ACCEPTA | TEST ACCEPTA | 6 | Apple iPad Pro 10.5 inch|6|JBL Clip 2|Fitbit Alta|