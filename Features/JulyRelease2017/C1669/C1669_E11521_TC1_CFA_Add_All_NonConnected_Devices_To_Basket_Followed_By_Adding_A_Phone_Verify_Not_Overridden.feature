Feature: C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden 

Scenario Outline:
CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device and Veiryf Basket not overridden 
	Given I am an CFA user and Lands on shop page 
	And Navigate to Accessories 
	And Select <accessoryname> from accessories 
	And add quantity of accessories to basket within <limit> in details page and navigate to basket 
	And I Land on the Non Phone related basket page and choose home delivery option 
	And click on continue shopping button 
	And Navigate to Fitness Trackers 
	And I choose <fitnesstrackername> FitnessTracker 
	And add quantity of FitnessTracker to basket within <limit> in details page and navigate to basket 
	And I Land on the Non Phone related basket page and choose home delivery option 
	And click on continue shopping button 
	And Navigate to SmartWatches 
	And I choose <smartwatchname> Smartwatch 
	And add quantity of SmartWatches to basket within <limit> in details page and navigate to basket 
	And I Land on the Non Phone related basket page and choose home delivery option 
	And Verify all non connected devices got added to the basket section before selecting connected device 
	And click on continue shopping button 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
	And Land on the 'Tariffs and extra' page 
	And I Land on the basket page and choose home delivery option 
	And Verify all non connected devices are still retained in the basket and not overridden 
	And click on "go to checkout" button 
	And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button' 
	And land on the payment page and input <Username> and other details and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page and review the order 
	Then order confirmation is displayed 
	
	Examples: 
		| handset | Firstname | Surname | Username     | limit |accessoryname|fitnesstrackername|smartwatchname|
		| Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA |     1 |JBL Clip 2|Fitbit Alta|Pebble Original|
