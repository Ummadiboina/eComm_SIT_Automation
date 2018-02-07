Feature: ConsumerToAcceptTenDigitsPhoneNumber
  This scenario ensures that the consumer shop accepts 10 digit home number
@Web
  Scenario Outline: ConsumerToAcceptTenDigitsPhoneNumber

  Given I am an CFA user and Lands on shop page
  And navigate to PAYM Phones page
  And I choose PayM <handset> #provide handset which is already set as delayed delivery
  And select <color> color of the connected device
  And Navigate to device details page
  And Land on the 'Tariffs and extra' page
  And I Land on the basket page and choose home delivery option
  And click on "go to checkout" button
  #The below statement also checks for 0 in case of a mobile number
  And enter a <Firstname> and <Surname> and ten digit home number
  And land on the payment page and input <Username> and other details and click 'Continue on next step'
  And Continue to Agreements page and confirm all the agreement checks
  And Continue to Review page and review the order
  When order confirmation is displayed
  Then Verify contents of order confirmation page for Phones containing <Status>

    #Step 12 and Step 13 of ALM clubbed together
    #Close the browser
Examples:
| handset | Firstname | Surname | Username     | Status           | color |
| Iphone7 | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Black |
