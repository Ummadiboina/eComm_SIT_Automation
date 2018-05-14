Feature: Feature: 38_Agent_Existing_SIMO_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_ALL.feature

  This Scenario ensures that when the Agent in Existing customer journey selects 'SIMO'  with Home Delivery and placed an order by opting of Marketing preference 'ALL' and CP 'ALL',
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 38_Agent_Existing_SIMO_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_ALL
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address
    And perform the credit checks for Agent Existing <Username> by Bank details
    #When Pay by card for PAYM device (if submit order fails use this)
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | status  | MBBStatus | DeviceType |
      | 07521123351 | SimO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11UP   | Select | Select | Select | Not | Select | Select | Select | Select | Me       | Enabled | No        | Connected  |


