Feature: AFU_customer_eligible_for_SIMO_targeted_bolton_promotion_NO_targeted_bolton_promotion_tab_Agent_upgrade_options_page
  This scenario ensures that when the upgrade Customer is eligible for SIMO targeted bolt-on promotion, then the targeted promotion tab should be displayed at the end of the tabs in Agent upgrade options page

  @Web
  Scenario Outline: AFU_SIMO_Promotions_section_in_deal_builder_MULIPLE_promotions_Order_Placement
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Verify that the customer is presented with the targeted promotion tab at the end of the tabs and also Verify the following are displayed in targeted promotion tab
    And Click on 'Select' Button in targeted promotion tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user       | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
      |07521118904 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           6 | SL11ER   |