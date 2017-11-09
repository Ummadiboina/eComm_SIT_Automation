Feature: AFU_Phone_Promotions_section_in_deal_builder_SINGLE_promotions_REPLACE_device_with_SAME_device_validate_promotion
  This scenario ensures that when the Agent in Upgrade selects a 'Phone' and tariff with single promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder
  *REPLACE the device or tariff with same device, then the Promotions should be retained in the basket

  @Web
  Scenario Outline: AFU_Phone_Promotions_section_in_deal_builder_SINGLE_promotions_REPLACE_device_with_SAME_device_validate_promotion
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab with single promotion
    And select a valid Handset and Tariff combination
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that the promotion returned is displayed in a single line
    When Replace the device or tariff from the deal builder with same device
    Then the 'Promotions' should be retained in the deal builder

    Examples:
      | user        | Device | Tariffs |
      |             |        | Single  |