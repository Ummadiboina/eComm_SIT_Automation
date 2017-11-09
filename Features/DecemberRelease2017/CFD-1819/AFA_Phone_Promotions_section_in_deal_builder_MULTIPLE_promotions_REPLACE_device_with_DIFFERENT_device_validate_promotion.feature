Feature: AFA_Phone_Promotions_section_in_deal_builder_MULTIPLE_promotions_REPLACE_device_with_DIFFERENT_device_validate_promotion
  This scenario ensures that when the Agent in acquisition selects a 'Phone' and tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder
  *REPLACE the device or tariff with same device, then the Promotions should be removed from the basket

  @Web
  Scenario Outline: AFA_Phone_Promotions_section_in_deal_builder_MULTIPLE_promotions_REPLACE_device_with_DIFFERENT_device_validate_promotion
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device1>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that for more than one promotion is returned
    And Verify that the promotion returned is displayed in a single line
    Then Replace the device <Device2> from the deal builder with different device and the 'Promotions' should be removed from the deal builder

    Examples:
      | Device1             | Tariffs | Device2 |