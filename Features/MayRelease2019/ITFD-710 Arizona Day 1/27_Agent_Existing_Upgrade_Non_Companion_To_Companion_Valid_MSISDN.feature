#Invalid scenario
Feature: 27_Agent_Existing_Upgrade_Non_Companion_To_Companion_Valid_MSISDN

  #launch hooks and get browser
  @Web
  Scenario Outline: Agent_Existing_Upgrade_Non_Companion_To_Companion_Valid_MSISDN
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    #And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    #And Choose <DeliveryType> delivery address and delivery time
    #And Update Device Plan Link Email Address
    #And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | user        | Device | Tariffs | BSCstatus | username | consumer | Firstname     | Surname     | HouseNumber     | PostCode  | Username   | Email  | Phone | Post | status  | password | DeviceType | DeliveryType | status2  |
      | 07568414065 |  | Refresh | Disabled   |            | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Yes         |       |