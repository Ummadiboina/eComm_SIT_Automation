Feature: Reg_Agent_PreOrder

  @ConsumerShop
  Scenario Outline: CFA PayM Pre Order Phones Home delivery E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PreOrder PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Close the browser
    Examples: 
      | handset   | Firstname | Surname | Username     |
      | Pre Order | TEST      | ACCEPTA | TEST ACCEPTA |
