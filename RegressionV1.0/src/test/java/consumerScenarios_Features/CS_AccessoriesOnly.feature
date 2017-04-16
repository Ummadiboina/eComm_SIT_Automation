Feature: Accessories only E2E journey

  @SmokeTest_CS_AccessoryOnly
  Scenario Outline: Accessories only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    #And input all the fields on the Delivery page and Click on the 'Continue button'
    #And I land on the Non Credit check payment page and input all the details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname | Username     |
      | TEST      | ACCEPTA | TEST ACCEPTA |