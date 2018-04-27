Feature: Feature: 36_Agent_Existing_PAYM_Phones_Standard_Home_delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed_Advisor_check.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'Phone' as Not an END user then the MP should be
  suppressed in Advisor checks section

  @Web
  Scenario Outline: 36_Agent_Existing_PAYM_Phones_Standard_Home_delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed_Advisor_check
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
      | user | Device                        | Tariffs  | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1  | B2  | B3  | B4  | Text  | Email  | Phone  | Post  | Consumer     |status|MBBStatus|
      |      | iPhone 7 Plus 128GB Jet Black | Standard | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Not | Not | Not | Not | Not | Not | Not | Not | SomeOne else |Enabled         |No       |

