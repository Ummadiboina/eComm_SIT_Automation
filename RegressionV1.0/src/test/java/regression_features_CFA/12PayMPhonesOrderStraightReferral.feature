Feature: CFA PayM phones Straight Order Referred

  @smokeTest
  Scenario Outline: CFA PayM phones Straight Order Referred
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM handset
    And Land on the 'Tariffs and extra' page
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option 
    And click on "go to checkout" button
    And Input <Firstname>  and <surname> aDelivery page
    And input all the other fields on the Delivery page and Click on the 'Continue button'
    And I land on the payment page and input <username> and other valid details and click 'Continue on next step'
    Then Valid <page> should be displayed
    
    Examples:
    |Firstname|surname|username|page|
    |TEST|REFER|TEST REFER|Order Referred|
    |TEST|DECLINE|TEST DECLINE|Order Referred|