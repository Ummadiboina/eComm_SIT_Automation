Feature: CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box

  Scenario Outline: 
    This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery, 
    then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset> #provide handset which is already set as delayed delivery
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>

    #Step 12 and Step 13 of ALM clubbed together
    #Close the browser
    Examples: 
      | handset             | Firstname | Surname | Username     | Status           |
      | Apple iPhone 7 Plus | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery |
