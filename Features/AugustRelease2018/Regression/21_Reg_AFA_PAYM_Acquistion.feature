Feature: 21_Reg_AFA_PAYM_Acquistion

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated
    Examples:
      | Device                        | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone 8 Plus 64GB Space Grey | Random  | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
