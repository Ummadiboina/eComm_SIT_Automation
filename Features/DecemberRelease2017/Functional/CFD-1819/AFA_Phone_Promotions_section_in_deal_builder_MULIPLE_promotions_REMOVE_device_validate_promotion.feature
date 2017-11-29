Feature: AFA_Phone_Promotions_section_in_deal_builder_MULIPLE_promotions_REMOVE_device_validate_promotion

  This scenario ensures that when the Agent in acquisition selects a 'Phone' and tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder

  @Web
  Scenario Outline:AFA_Phone_Promotions_section_in_deal_builder_MULIPLE_promotions_REMOVE_device_validate_promotion
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    Then Remove the device or tariff from the deal builder
    Then the 'Promotions' should be removed and the 'Promotion section' should be empty

    Examples:
      | Device                   | Tariffs |
      | apple iphone 7 32GB gold | Random  |
