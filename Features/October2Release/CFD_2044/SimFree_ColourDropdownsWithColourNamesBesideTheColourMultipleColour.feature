Feature: SimFree_ColourDropdownsWithColourNamesBesideTheColour_MultipleColour

  Scenario Outline: SimFree ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to Like New Phones page
    And select simfree link
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <LikeNewDevicePage> 
    And select a colour
    And Click on Simfree tariff tile
    And verify the name of the colur is next to the colour tile in <extraspage> 
    And Click on Go to Basket button
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    
    Examples:
    
    |Firstname|Surname|Username|LikeNewDevicePage|extraspage|
    