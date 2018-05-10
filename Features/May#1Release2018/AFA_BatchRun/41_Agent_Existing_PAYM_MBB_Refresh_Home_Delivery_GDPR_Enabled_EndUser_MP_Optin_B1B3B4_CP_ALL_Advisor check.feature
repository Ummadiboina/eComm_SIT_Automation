Feature: 41_Agent_Existing_PAYM_MBB_Refresh_Home_Delivery_GDPR_Enabled_EndUser_MP_Optin_B1B3B4_CP_ALL_Advisor check.feature

  This Scenario ensures that when the Agent in Existing customer journey selects 'PayM MBB'  with Home Delivery and placed an order by opting of Marketing preference 'B1/B3/B4' and CP 'ALL',
  then the Order consent profile should be created in CMT as expected


  @Web
  Scenario Outline: 41_Agent_Existing_PAYM_MBB_Refresh_Home_Delivery_GDPR_Enabled_EndUser_MP_Optin_B1B3B4_CP_ALL_Advisor check
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address
    And perform the credit checks for Agent Existing <Username> by Bank details
    When Pay by card for PAYM device for Existing customer
    Then Order confirmation message should be displayed


    Examples:
      | user        | Device           | Tariffs | Username     | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | status  | MBBStatus | DeviceType |
      | 07801260072 | Huawei 4G Dongle | Refresh | Test Accepta | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Select | Not | Select | Not | Select | Select | Select | Select | Me       | Enabled | No        | Connected  |

