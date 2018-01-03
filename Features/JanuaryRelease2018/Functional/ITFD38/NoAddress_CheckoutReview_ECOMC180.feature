Feature: NoAddress_CheckoutReview_ECOMC180

  @Web

  Scenario Outline:  NoAddress_CheckoutReview_ECOMC180

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And click on 'Change delivery' link
    And enter a <houseNumber> and an <PostCode>
    Then the respective <error> message should be displayed

    Examples:

      |handset|Firstname|Surname|Username|PostCode  |error     |houseNumber |
      |       |         |       |        |Commercial|Commercial| Commercial |