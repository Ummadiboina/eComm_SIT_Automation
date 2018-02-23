Feature: C1960_E11522_TC1_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer

  @Web
  Scenario Outline: This scenario ensures that when the Agent in upgrade journey access the 'Tariffs' tab,
  then the agent should be able to see 'Base Comms' tariff  highlighted or tagged differently along with normal tariffs and should be able to place order

    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariffs> from tariffs tab
    And Select a valid PayM <Device>
    And Verify that Basecomms is displayed in the offers section
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs |
      | 07521119232 | Random | Base    |
