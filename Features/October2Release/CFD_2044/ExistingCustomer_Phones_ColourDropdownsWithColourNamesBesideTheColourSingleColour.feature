Feature: ExistingCustomer_Phones_ColourDropdownsWithColourNamesBesideTheColourSingleColour

Scenario Outline: ExistingCustomer Phones_ColourDropdownsWithColourNamesBesideTheColourSingleColour

Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And click on the color dropdown
    And verify the name of the colur is next to the colour tile in <CFAPhoneColour>
    And select <color> color of the connected device
    And Land on the 'Tariffs and extra' page
    And click on the color dropdown
    And verify the name of the colur is next to the colour tile in <CFATariffColour>
    And select <color> color of the connected device
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And select continue button in delivery page for existing customer
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    
    
    Examples: 
    
    |username|password|handset|CFAPhoneColour|CFATariffColour|user|
    |        |test123 |       |              |               |TEST ACCEPTA|


