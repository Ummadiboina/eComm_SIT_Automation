Feature: CFA PayM Phones Pay full amount in tariff and extras page

  @smokeTest
  Scenario: CFA PayM Phones Pay full amount in tariff and extras page
Given I am an CFA user and Lands on shop page
   And navigate to PAYM Phones page
    And I choose PayM handset
    And Land on the 'Tariffs and extra' page
    And Choose to Pay for your device in full
    And I Land on the basket page and choose home delivery option 
    And click on "go to checkout" button
    And input all the fields on the Delivery page and Click on the 'Continue button'
    And I land on the payment page and input all the details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed