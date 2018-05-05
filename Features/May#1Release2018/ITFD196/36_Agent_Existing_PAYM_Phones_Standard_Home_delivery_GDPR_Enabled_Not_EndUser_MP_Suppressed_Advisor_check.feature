Feature: Feature: 36_Agent_Existing_PAYM_Phones_Standard_Home_delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed_Advisor_check.feature

  This Scenario ensures that when the Agent in existing customer acquisition journey selects 'PayM Phone'  with Home delivery and placed an order by selecting End user as 'Someone else',
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 36_Agent_Existing_PAYM_Phones_Standard_Home_delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed_Advisor_check
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
      | user        | Device                        | Username     | Tariffs  | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1  | B2     | B3  | B4  | Text | Email | Phone  | Post | Consumer | status  | MBBStatus | DeviceType |
      | 07521110585 | iPhone 7 Plus 128GB Jet Black | TEST ACCEPTA | Standard | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Not | Select | Not | Not | Not  | Not   | Select | Not  | Me       | Enabled | No        | Connected  |

