Feature: 32_AFA_NewConnection_PAYM_Phones_Standard_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_No

  This Scenario ensures that when the Agent in acquisition journey selects 'PAYM Phone'  with Home Delivery and placed an order by opting of Marketing preference 'ALL' and CP 'NO',
  then the Order consent profile should be created in CMT as expected

  #launch hooks and get browser
  @Web
  Scenario Outline: 32_AFA_NewConnection_PAYM_Phones_Standard_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_No
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device              | Tariffs  | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2     | B3     | B4     | Text | Email | Phone | Post | Consumer | status  | MBBStatus |DeviceType|
      | Galaxy S8 Plus 64GB | Standard | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Select | Select | Select | Select | Not  | Not   | Not   | Not  | Me       | Enabled | No        |Connected |
