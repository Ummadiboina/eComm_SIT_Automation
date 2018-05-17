Feature: 34_AFA_NewConnection_PAYG_Tablets_HomeDelivery_GDPR_Enabled_EndUser_MP_OptIn_B2_CP_ALL

  This Scenario ensures that when the Agent in acquisition journey selects 'PAYG Tablet'  with Home Delivery and placed an order by opting of Marketing preference 'B2' and CP 'All',
  then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 34_AFA_NewConnection_PAYG_Tablets_HomeDelivery_GDPR_Enabled_EndUser_MP_OptIn_B2_CP_ALL
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    #And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    #And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device            | Tariffs | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1  | B2     | B3  | B4  | Text   | Email  | Phone  | Post   | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType | DeviceModule |
      | Galaxy Tab S3 9.7 | Random  | HomeDelivery | TEST      | ACCEPTA | 4           | SL11UP   | Not | Select | Not | Not | Select | Select | Select | Select | Me       | Enabled | test123  | test123         | vinudeep       | No        | Connected  | Tablet       |
