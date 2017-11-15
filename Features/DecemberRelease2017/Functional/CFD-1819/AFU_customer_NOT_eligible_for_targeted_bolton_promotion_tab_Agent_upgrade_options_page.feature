Feature: AFU_customer_NOT_eligible_for_targeted_bolton_promotion_tab_Agent_upgrade_options_page
  This scenario ensures that when the upgrade Customer is not eligible for targeted bolt-on promotion, then the targeted promotion tab should not be displayed at the end of the tabs in Agent upgrade options page

  @Web
  Scenario Outline: AFU_customer_NOT_eligible_for_targeted_bolton_promotion_tab_Agent_upgrade_options_page
    Given I login to Agent shop
    And performs Upgrade for <user>
    And the customer is not presented with the targeted promotion tab at the end of the tabs

    Examples:
    | user |