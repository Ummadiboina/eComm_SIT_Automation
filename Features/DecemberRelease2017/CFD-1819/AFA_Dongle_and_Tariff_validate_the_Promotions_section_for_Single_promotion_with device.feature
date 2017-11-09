Feature: AFA_Dongle_and_Tariff_validate_the_Promotions_section_for_Single_promotion_with device
  This scenario ensures that when the Agent in acquisition selects a 'Dongle' and tariff with single promotion, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder

  @Web
  Scenario Outline: AFA_Dongle_and_Tariff_validate_the_Promotions_section_for_Single_promotion_with device
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a single promotion
    And select a valid Handset and Tariff combination
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that the promotion returned is displayed in a single line

    Examples:
    | Device | Tariffs |
    | Dongle | Single  |

