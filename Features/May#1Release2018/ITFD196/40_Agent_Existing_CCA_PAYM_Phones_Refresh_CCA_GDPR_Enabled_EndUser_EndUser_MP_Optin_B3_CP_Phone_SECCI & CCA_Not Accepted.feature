Feature: 40_Agent_Existing_CCA_PAYM_Phones_Refresh_CCA_GDPR_Enabled_EndUser_EndUser_MP_Optin_B3_CP_Phone_SECCI & CCA_Not Accepted.feature

  This Scenario ensures that when the Agent in Existing customer acquisition journey selects 'PAYM Tablet' with Home Delivery and Not Accepted 'SECCI & CCA' agreements,
  then the Order should not be placed and consent profile should not be created

  #launch hooks and get browser
  @Web
  Scenario Outline: 40_Agent_Existing_CCA_PAYM_Phones_Refresh_CCA_GDPR_Enabled_EndUser_EndUser_MP_Optin_B3_CP_Phone_SECCI & CCA_Not Accepted

    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    And validate the Personal details for Agent Existing customer and Enter time at current Address
    And perform the credit checks for Agent Existing <Username> by Bank details
    And Update Device Plan Link Email Address
    And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And Click on the 'Continue button' in delivery page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And donot select the SECCI and CCA agreements in Agreement page
    #Order should not be placed


    Examples:
      | user        | Device              | Tariffs | username | password | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1  | B2  | B3     | B4  | Text | Email | Phone  | Post | Consumer | status2  | consumer | MBBStatus |DeviceType|
      | 07521009589 | Galaxy S8 Plus 64GB | Refresh |          | test123  | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Not | Not | Select | Not | Not  | Not   | Select | Not  | Me       | Disabled | Me       | No        |Connected |


