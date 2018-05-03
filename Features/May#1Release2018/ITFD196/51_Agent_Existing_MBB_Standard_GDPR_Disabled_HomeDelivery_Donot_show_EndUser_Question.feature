Feature: 51_Agent_Existing_MBB_Standard_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'MBB' with GDPR Disabled then the
  End User question and Preferences should not be displayed in Advisor check


  @Web
  Scenario Outline: 51_Agent_Existing_MBB_Standard_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address <Years> <Months>
    And perform the credit checks for Agent Existing customer by Bank details
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed


    Examples:
      | user        | Device           | Tariffs  | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4     | Text   | Email  | Phone  | Post   | consumer | status   | MBBStatus |DeviceType|
      | 07521009589 | Huawei 4G Dongle | Standard | HomeDelivery | TEST      | ACCEPTA | 11          | SL11UP   | Select | Not | Select | Select | Select | Select | Select | Select | Me       | Disabled | No        |Connected |

