Feature: 29_AFA_NewConnection_PAYM_Phone_Refresh_CCA_GDPR_Enabled_EndUser_SECCI & CCA_Not Accepted

  This Scenario ensures that when the Agent in acquisition journey selects 'PAYM Phone' with Home Delivery and Not Accepted 'SECCI & CCA' agreements,
  then the Order should not be placed and consent profile should not be created

  #launch hooks and get browser
  @Web
  Scenario Outline: 29_AFA_NewConnection_PAYM_Phone_Refresh_CCA_GDPR_Enabled_EndUser_SECCI & CCA_Not Accepted
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Update Device Plan Link Email Address
    And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Device              | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | Consumer     | status  | status2  | consumer | username | password | MBBStatus |DeviceType|
      | Galaxy S8 Plus 64GB | Refresh | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | SomeOne else | Enabled | Disabled | Me       |          | test123  | No        |Connected |
