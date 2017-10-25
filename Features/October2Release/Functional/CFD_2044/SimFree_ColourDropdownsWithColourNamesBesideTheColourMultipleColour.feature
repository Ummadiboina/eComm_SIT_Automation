Feature: SimFree_ColourDropdownsWithColourNamesBesideTheColour_MultipleColour

  @Web
  Scenario Outline: SimFree ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to Like New Phones page
    And select <LikeNewPhoneOption> link
    And click on the color dropdown for like new
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Click on <LikeNewTariffOption> tariff tile
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    
    Examples:
    
    |Firstname|Surname|Username       |LikeNewTariffOption|LikeNewPhoneOption|color|
    | TEST    |ACCEPTA|TEST ACCEPTA   |                   |SimFree           |Gold |
    