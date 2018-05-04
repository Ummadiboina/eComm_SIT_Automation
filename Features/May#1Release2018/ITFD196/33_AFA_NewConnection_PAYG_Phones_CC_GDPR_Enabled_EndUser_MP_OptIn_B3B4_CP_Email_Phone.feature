Feature: 33_AFA_NewConnection_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptIn_B3B4_CP_Email_Phone

  This Scenario ensures that when the Agent in acquisition journey selects 'PAYG Phone'  with Click and collect and placed an order by opting of Marketing preference 'B3/B4' and CP 'Email/Phone',
  then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 33_AFA_NewConnection_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptIn_B3B4_CP_Email_Phone
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
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device              | Tariffs | DeliveryType | Firstname | Surname | HouseNumber | PostCode | B1  | B2  | B3     | B4     | Text | Email  | Phone  | Post | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus |DeviceType|
      | iPhone 6s 32GB Gold | Random  | HomeDelivery | TEST      | ACCEPTA | 4           | SL11UP   | Not | Not | Select | Select | Not  | Select | Select | Not  | Me       | Enabled | test123  | test123         | vinudeep       | No        |Connected |
