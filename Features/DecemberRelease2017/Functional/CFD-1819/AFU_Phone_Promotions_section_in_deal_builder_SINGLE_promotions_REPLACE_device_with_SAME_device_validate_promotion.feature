Feature: AFU_Phone_Promotions_section_in_deal_builder_SINGLE_promotions_REPLACE_device_with_SAME_device_validate_promotion
  This scenario ensures that when the Agent in Upgrade selects a 'Phone' and tariff with single promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder
  *REPLACE the device or tariff with same device, then the Promotions should be retained in the basket

  @Web
  Scenario Outline: AFU_Phone_Promotions_section_in_deal_builder_SINGLE_promotions_REPLACE_device_with_SAME_device_validate_promotion
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariff1> from tariffs tab
    #The tariff selected should have a Single promotion
    And select a valid Handset and Tariff combination
    And the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And the promotion returned is displayed in a single line
    And Select valid <Tariff> from tariffs tab
    Then the 'Promotions' should be retained in the deal builder

    Examples:
      | user        | Device | Tariff1 | Tariff |
      |             |        | Single  |        |