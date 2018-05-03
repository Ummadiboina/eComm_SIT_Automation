Feature: 35_AFA_NewConnection_PAYG_MBB_CC_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_No

  This Scenario ensures that when the Agent in acquisition journey selects 'PAYG MBB'  with Click and collect and placed an order by opting of Marketing preference 'ALL' and CP 'NO',
  then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 35_AFA_NewConnection_PAYG_MBB_CC_GDPR_Enabled_EndUser_MP_Optin_ALL_CP_No
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device              | Tariffs | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1     | B2     | B3     | B4     | Text | Email | Phone | Post | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus |DeviceType|
      | iPhone 6s 32GB Gold | Random  | HomeDelivery | TEST      | ACCEPTA | 4           | SL11UP   | Select | Select | Select | Select | Not  | Not   | Not   | Not  | Me       | Enabled | test123  | test123         | vinudeep       | NoZ       |Connected |
