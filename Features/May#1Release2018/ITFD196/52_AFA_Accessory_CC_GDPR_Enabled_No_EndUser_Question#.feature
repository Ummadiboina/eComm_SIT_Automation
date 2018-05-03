Feature: 52_AFA_Accessory_CC_GDPR_Enabled_No_EndUser_Question
  This scenario ensures that when the Agent in Acquisition journey selects a 'Smart tech' device and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up

  @Web
  Scenario Outline: 52_AFA_Accessory_CC_GDPR_Enabled_No_EndUser_Question

    Given I login to Agent shop
    And performs Acquisition for New user
    #And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And Select a valid Accessory <Device>
    #And select <Device> Fitness tracker
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device        | Firstname | Surname | Username     | HouseNumber | PostCode | DeliveryType | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | Consumer     | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType    |
      | Fitbit Flex 2 | TEST      | ACCEPTA | TEST ACCEPTA | 11          | SL11UP   | HomeDelivery | Not | Not | Not | Not | Not  | Not   | Not   | Not  | SomeOne else | Enabled | test123  | test123         | vinudeep       | No        | Non Connected |