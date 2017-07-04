Feature: C1169_E11522_TC2

  @AgentsRegressionPAYM
  Scenario Outline: E11522_CFA_MoreThan12Accessory_Phone
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Choose all Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'

    Examples: 
      | handset | Firstname | Surname | Username     |
      | Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA |
