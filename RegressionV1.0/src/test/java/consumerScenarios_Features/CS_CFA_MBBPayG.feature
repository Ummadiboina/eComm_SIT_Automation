Feature: PAYG MBB only E2E journey

 @Regression
  Scenario Outline: PAYG MBB only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to PayG MBB page
    And I choose MBB PayG "Random Device"
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    
    
    Examples: 
      | Firstname | Surname | Username     |
      | TEST      | ACCEPTA | TEST ACCEPTA |