Feature: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  Scenario Outline: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <CFAPhoneColour>
    And select a colour
    And Land on the 'Tariffs and extra' page
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <CFATariffColour>
    And select a colour
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Close the browser
    Examples: 
      | handset | Firstname | Surname | Username     |CFAPhoneColour|CFATariffColour|
      | Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA |
