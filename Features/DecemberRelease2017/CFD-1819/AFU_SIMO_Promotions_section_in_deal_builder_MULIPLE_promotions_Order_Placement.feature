Feature: AFU_SIMO_Promotions_section_in_deal_builder_MULIPLE_promotions_Order_Placement
  This scenario ensures that when the Agent in upgrade selects 'SIMO' tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder and agent should be able to complete the order

  @Web
  Scenario Outline: AFU_SIMO_Promotions_section_in_deal_builder_MULIPLE_promotions_Order_Placement
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid SIMO <Tariff> from tariffs tab with multiple promotions
    And verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And Validate all the Basket content and checkout
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the order summary
    And Verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed


   Examples:
    | user       | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
    |07521118904 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           6 | SL11ER   |