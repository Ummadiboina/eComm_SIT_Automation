Feature: 45_AFU_SIMO_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1B4_CP_Email

  This Scenario ensures that when the Agent in Upgrade journey with Reaffirmed consent status selects 'SIMO' with Home delivery and placed an order by opting of Marketing preference 'B1/B4' and CP 'Email',
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 45_AFU_SIMO_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1B4_CP_Email
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed


    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 07568412560 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11ER   | Me       | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |