Feature: C1960_E11522_TC3_Agent_Existing_user_new_acquisition_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer

  Scenario Outline: This scenario ensures that when the Agent in Existing user journey clicks on the Tariffs tab, then the agent should be able to see Base Comms tariff  highlighted or tagged differently along with normal tariffs and should be able to place order
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariffs> from tariffs tab
    And Select a valid PayM <Device>
    And Verify that Basecomms is displayed in the offers section
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname> and <Surname> and valid <Username>
    And Register customer with valid <Firstname> and <Surname> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples: 
      | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     |
      | Random | Base    | Base   | HomeDelivery | Test      | Accepta | Test Accepta |
