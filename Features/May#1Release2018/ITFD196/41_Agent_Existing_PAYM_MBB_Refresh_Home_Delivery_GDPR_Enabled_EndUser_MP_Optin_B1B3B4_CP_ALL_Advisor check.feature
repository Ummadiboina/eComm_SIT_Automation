Feature: 41_Agent_Existing_PAYM_MBB_Refresh_Home_Delivery_GDPR_Enabled_EndUser_MP_Optin_B1B3B4_CP_ALL_Advisor check.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'MBB' as an END user then the agent should be
  able to Optin MP_B1B3B4 and CP_ALL in the Advisor check


  @Web
  Scenario Outline: 41_Agent_Existing_PAYM_MBB_Refresh_Home_Delivery_GDPR_Enabled_EndUser_MP_Optin_B1B3B4_CP_ALL_Advisor check
    Given I login to Agent shop
    And performs Agent Existing customer journery for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus>
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address <Years> <Months>
    And perform the credit checks for Agent Existing customer by Bank details
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed


    Examples:
      | user | Device           | Tariffs | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4     | Text     | Email     | Phone     | Post     | Consumer |status|MBBStatus|
      |      | Huawei 4G Dongle | Refresh | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Select | Not | Select | Select | Select | Select | Select | Select | Me       |Enabled         |No       |

