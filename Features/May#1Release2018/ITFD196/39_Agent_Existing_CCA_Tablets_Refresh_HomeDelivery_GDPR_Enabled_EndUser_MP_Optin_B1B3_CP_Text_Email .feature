Feature: 39_Agent_Existing_CCA_Tablets_Refresh_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_B1B3_CP_Text_Email.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'Phone' with CCA as an END user and
  MP_B1B3 and CP_Text_Email then the customer should be able to place order in Online shop

  #launch hooks and get browser
  @Web
  Scenario Outline: 39_Agent_Existing_CCA_Tablets_Refresh_HomeDelivery_GDPR_Enabled_EndUser_MP_Optin_B1B3_CP_Text_Email

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
    And Update Device Plan Link Email Address
    And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus>

    Examples:
      | user | Device              | Tariffs | username | password | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2  | B3     | B4  | Text  | Email  | Phone  | Post  | Consumer     |status2|status|consumer|MBBStatus|
      |      | Galaxy S8 Plus 64GB | Refresh |          | test123  | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Select | Not | Select | Not |  Select| Select | Not | Not | Me |Disabled   |Enabled         |   Me     |No     |


