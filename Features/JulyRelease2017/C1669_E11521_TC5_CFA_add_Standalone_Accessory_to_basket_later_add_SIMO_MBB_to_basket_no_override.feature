Feature: C1669_E11521_TC5_CFA_add_Standalone_Accessory_to_basket_later_add_SIMO_MBB_to_basket_no_override 

@JulyReleaseCheck 
Scenario Outline:
CFA add Standalone Accessory to basket later add SIMO MBB to basket no override 

	Given I am an CFA user and Lands on shop page 
	And Navigate to Accessories 
	And Select <accessoryname> from accessories 
	And click on Add to Basket button 
	And Verify the device <accessoryname> in basket 
	And click on continue shopping button 
	And navigate to PAYM SIMO page 
	And verify the elements 
	And select <tabname> tab 
	And choose <contract> contract length for MBB 
	Then Verify the devices <accessoryname> and <Your_Tariff> in basket 
	
	Examples: 
		| accessoryname    | tabname | contract | Your_Tariff |
		| JBL Xtreme Black | MBB     |30 Days| Your Tariff |
