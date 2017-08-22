Feature: CFA_Tariff page sort insurance and auto select free insurance

Scenario Outline:
This scenario ensures that when the customer has selected a PayM phone having associated tariffs and lands on the tariff and extras page then the insurance price should be in a sorted order and the free insurance is auto selected

Given I am an CFA user and Lands on shop page 
And navigate to PAYM Phones page 
And I choose PayM <handset>
And Navigate to device details page
And Land on the 'Tariffs and extra' page 
And verify that the insurance is in a sorted order
And verify that the free insurance is auto selected

Examples:
|handset|
|iPhone7|
