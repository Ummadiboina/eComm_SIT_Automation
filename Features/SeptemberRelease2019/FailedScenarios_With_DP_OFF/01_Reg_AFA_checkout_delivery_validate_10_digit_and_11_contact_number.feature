Feature: 01_Reg_AFA_checkout_delivery_validate_10_digit_and_11_contact_number

  This scenario ensures that the Agent shop accepts 10 digit home number

  @Web
  Scenario Outline: AgentToAcceptTenDigitsPhoneNumber
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    #And Dont cap my bill when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    And enter ten digit contact number perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated

    Examples:
      | Device                    | Tariffs | Extras | BSCstatus | BillCapAmount | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone 7 Plus 128GB Black | Refresh | Base   | Enabled   | £5            | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Select | Not | Select | Not | Select | Select | Not   | Not  | Me       | Enabled | No        | Connected  | Phone        |