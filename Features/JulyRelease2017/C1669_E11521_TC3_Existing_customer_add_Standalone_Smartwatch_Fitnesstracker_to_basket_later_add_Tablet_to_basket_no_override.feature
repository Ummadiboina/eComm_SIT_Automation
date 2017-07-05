Feature: C1669_E11521_TC3_Existing_customer_add_Standalone_Smartwatch_Fitnesstracker_to_basket_later_add_Tablet_to_basket_no_override 
@JulyRelease
Scenario Outline:
Existing customer add Standalone Smartwatch Fitnesstracker to basket later add Tablet to basket no override 
	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to SmartWatches 
	And I choose <smartwatchname> Smartwatch
	And click on Add to Basket button
	And click on continue shopping button
	And Navigate to Fitness Trackers
	And I choose <fitnesstrackername> FitnessTracker
	And click on Add to Basket button
	And click on continue shopping button
	And navigate to PAYM Tablets page
	And I choose <tabletname> Tablet
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page
	And I Land on the basket page and choose home delivery option
	Then Verify the devices <smartwatchname>, <fitnesstrackername> and <tabletname> in basket
	
	Examples: 
		| username    | password | user | smartwatchname | fitnesstrackername | tabletname |
		| ink_jun9198 | test123  | TEST ACCEPTA | SamsungGearS2 | FitbitAlta | iPad97 |
