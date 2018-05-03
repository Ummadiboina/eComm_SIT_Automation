Feature: 45_AFU_SIMO_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1B4_CP_Email
  This scenario ensures that when the Agent in upgrade selects 'SIMO' tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder and agent should be able to complete the order

  @Web
  Scenario Outline: 45_AFU_SIMO_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1B4_CP_Email
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed


    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | MBBStatus |DeviceType|
      | 07521118904 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11ER   | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled | No        |Connected |