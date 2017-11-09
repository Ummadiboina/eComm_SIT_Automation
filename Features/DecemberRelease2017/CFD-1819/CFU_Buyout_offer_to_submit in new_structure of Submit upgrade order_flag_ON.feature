Feature: CFU_Buyout_offer_to_submit in new_structure of Submit upgrade order_flag_ON
  This scenario ensures that the customer eligible for buyout offer, then the customer should be able to send all the Buyout details in the new 'Upgrade customer promotion' block of 'Submit upgrade order'

  @Web
  Scenario Outline: CFU_Buyout_offer_to_submit in new_structure of Submit upgrade order_flag_ON

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Verify that the buyout details are sent in the new 'Upgrade customer promotion' block of 'Submit upgrade order'

    Examples:
      | username                        | password |
      |                                 | test123  |