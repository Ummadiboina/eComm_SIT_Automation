Feature: Feature: 38_Agent_Existing_SIMO_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_ALL.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'SIMO' as an END user then the Agent should be
  able to optin MP_All and CP_ALL in Advisor check section

  @Web
  Scenario Outline: 38_Agent_Existing_SIMO_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_ALL
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address <Years> <Months>
    And perform the credit checks for Agent Existing customer by Bank details
    #When Pay by card for PAYM device (if submit order fails use this)
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | B1     | B2     | B3     | B4     | Text   | Email  | Phone  | Post   | Consumer | status  | MBBStatus |DeviceType|
      | 07521009589 | SimO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11UP   | Select | Select | Select | Select | Select | Select | Select | Select | Me       | Enabled | No        |Connected |


