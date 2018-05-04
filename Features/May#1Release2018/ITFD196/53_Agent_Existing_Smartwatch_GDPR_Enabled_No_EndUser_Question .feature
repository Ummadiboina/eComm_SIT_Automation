Feature: 53_Agent_Existing_Smartwatch_GDPR_Enabled_No_EndUser_Question.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'Smartwatch' with GDPR Enabled then the
  End User question and Preferences should not be displayed in Advisor check


  @Web
  Scenario Outline: 53_Agent_Existing_Smartwatch_GDPR_Enabled_No_EndUser_Question
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And select <Device> Smart watch
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed


    Examples:
      | user        | Device                       | Tariffs  | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4     | Text   | Email  | Phone  | Post   | Consumer | DeviceType    |
      | 07521009589 | Pebble Steel Stainless Steel | Standard | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Select | Not | Select | Select | Select | Select | Select | Select | Me       | Non Connected |
