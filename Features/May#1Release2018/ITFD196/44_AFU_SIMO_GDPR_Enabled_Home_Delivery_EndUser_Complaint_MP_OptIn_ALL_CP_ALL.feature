Feature: 44_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_ALL_CP_ALL
  This scenario ensures that when the Agent in upgrade selects 'SIMO' tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder and agent should be able to complete the order

  @Web
  Scenario Outline: 44_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_ALL_CP_ALL
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And for more than one promotions returned
    And the promotion returned is displayed in a single line
    And Validate all the Basket content and checkout
    And the 'Promotions' section is displayed with all the applied promotions description in the order summary
    And for more than 1 promotions returned
    And the promotion returned is displayed in a single line
    Then perform all the advisory checks
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status>
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed


    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | consumer | B1     | B2  | B3     | B4     | Text | Email    | Phone     | Post |status|
      | 07521118904 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11ER   | Me       | Select | Not | Select | Select | Select | Select | Not | Not |Enabled|