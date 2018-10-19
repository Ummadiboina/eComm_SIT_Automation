Feature: 02_Reg_AFA_Non_SIMO_Credit_Check_StatusReferWithSIMO_Show_Error_Message_Do_Not_allow_to_place_order
  This scenario ensures that when agent on acquisition journey selects 'SIMO' and device and performs credit check status with 'RefferWithSIMO' then agent should see referral message and then should be able to place an order successfully and order submission status should be 'Referred' in log file

  @Web
  Scenario Outline: AFA_update_copy_for_Refer_with_Simo_response
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariff> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Credit check status for ReferralwithSimo
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey


    Examples:
      | Device                       | Tariff  | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username    | HouseNumber | PostCode | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone 7 Plus 32GB Rose Gold | Refresh | HomeDelivery | Enabled   | No Spend Cap  | TEST      | referc  | Test Referc | 6           | SL11ER   | Select | Not | Select | Select | Select | Select | Not   | Not  | Someone  | Enabled | No        | Connected  | simo         |
