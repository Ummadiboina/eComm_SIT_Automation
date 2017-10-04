Feature: MyOffersMBB_ColourDropdownsWithColourNamesBesideTheColour_MultipleColour

Scenario Outline: MyOffersMBB ColourDropdownsWithColourNamesBesideTheColour MultipleColour

Current URL:
    https://www.o2.co.uk/shop/my-offers/mobile-broadband

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I launch the OldMBBURL
    And click on the colour dropdown
    And verify the name of the colur is next to the colour tile in <MBBLandingPage>
    And select <color> color of the connected device
    And select "random" MBBtariff
    #And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And select continue button in delivery page for existing customer
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Modify the above step to include pdf download
    Examples: 
      | username   | password | OldMBBURL                                                | user         |MBBLandingPage|
      | in_jul1136 | test123  | https://www.ref.o2.co.uk/shop/my-offers/mobile-broadband | TEST ACCEPTA |							 |
