Feature: CFU_Tariff page sort insurance and auto select free insurance 

Scenario Outline: 
	This scenario ensures that when the customer on an upgrade journey has selected a PayM phone having associated tariffs and lands on the tariff and extras section  then the insurance price should be in a sorted order and the free insurance is auto selected

	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to upgrade phone 
	And I choose upgrade PayM handset <handset> 
	And Navigate to device details page 
	And select a <tariff> which has free insurance 
	And verify that the insurance is in a sorted order 
	And verify that the free insurance is auto selected 
	
	Examples: 
		|username|password|handset|tariff|
		|  |  |  |