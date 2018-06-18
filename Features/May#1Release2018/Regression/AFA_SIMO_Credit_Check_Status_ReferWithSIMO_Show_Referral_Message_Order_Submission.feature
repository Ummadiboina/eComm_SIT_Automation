Feature: AFA_SIMO_Credit_Check_Status_ReferWithSIMO_Show_Referral_Message_Order_Submission
  This scenario ensures that when agent on acquisition journey selects 'SIMO' and performs credit check status with 'RefferWithSIMO' then agent should see referral message and then should be able to place an order successfully and order submission status should be 'Referred' in log file

  @Web
  Scenario Outline: AFA_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Credit check status for ReferralwithSimo
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then agent should be displayed with updated copy of 'Refer with Simo' response

    Examples:
      | Tariff | DeliveryType | Firstname | Surname | Username    | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |
      | SimO   | HomeDelivery | TEST      | Referc  | Test Referc | 6           | SL11ER   | Select | Not | Select | Not | Select | Select | Not   | Not  | Me       | Enabled | No        | Connected  | Simo         |