Feature: CFU_Tradein_offer_to_submit in new_structure of Submit upgrade order_flag_ON
  This scenario ensures that the customer eligible for trade-in offer, then the customer should be able to send all the trade-in details in the new 'Upgrade customer promotion' block of 'Submit upgrade order'
  *The customer should be eligible for Trade-in offer
  *The flag to control which upgrade block to use should be 'ON'

  @Web
  Scenario Outline: CFU_Tradein_offer_to_submit in new_structure of Submit upgrade order_flag_ON
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Verify that the trade-in details are sent in the new 'Upgrade customer promotion' block of 'Submit upgrade order'
    And Verify that 'Offers collection' cache is used to fetch the 'Ts&Cs' instead of 'Get Promotions' call

    Examples:
      | username                        | password |
      |                                 | test123  |