Feature: AFU_customer_eligible_for_Standard_or_CCA_targeted_bolton_promotion_tab_Agent_upgrade_options_page_Order_placement
  This scenario ensures that when the upgrade Customer is eligible for Standard/CCA targeted bolt-on promotion, then the targeted promotion tab should be displayed at the end of the tabs in Agent upgrade options page
  *The targeted promotion can be SIMO or handset make/model and tariff combination.

  @Web
  Scenario Outline: AFU_customer_eligible_for_Standard_or_CCA_targeted_bolton_promotion_tab_Agent_upgrade_options_page_Order_placement

    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should be SIMO targeted bolt-on promotion
    And the customer is presented with the targeted promotion tab at the end of the tabs
    And Click on 'Select' Button in targeted promotion tab
    And Click on 'Copy to Basket' CTA
    And Validate all the Basket content and checkout
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
    | user        | Tariff |
    | 07521118904 | SimO   |