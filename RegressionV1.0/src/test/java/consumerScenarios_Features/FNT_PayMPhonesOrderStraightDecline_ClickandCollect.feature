Feature: CFA PayM phones Straight Order Declined

  @smokeTest
  Scenario Outline: CFA PayM phones Straight Order Declined
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    Then Order Decline page should be displayed
    
    Examples: 
     | handset  | Firstname | Surname | Username     |
      | GalaxyS7 | TEST      | DECLINEA | TEST DECLINEA |