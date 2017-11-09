Feature: AFA_SIMO_Promotions_section_in_deal_builder_SINGLE_promotions_EMPTY_basket_validate_promotion
  This scenario ensures that when the Agent in acquisition selects 'SIMO' tariff with single promotion, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder
  *EMPTY the basket, then the Promotions should be removed from the basket

  @Web
  Scenario Outline: AFA_SIMO_Promotions_section_in_deal_builder_SINGLE_promotions_EMPTY_basket_validate_promotion
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a single promotion
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that the promotion returned is displayed in a single line
    When Click on 'Empty basket' CTA then the  'Promotions' should be removed from the basket

    Examples:
      | Tariff |
      | Simo   |

