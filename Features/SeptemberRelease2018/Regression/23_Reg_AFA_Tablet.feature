Feature: 23_Reg_AFA_Tablet

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a Tablet Journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    # And Update Device Plan Link Email Address
    #  Then CCALink Should be generated
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device                              | Tariffs | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | iPad Pro 10.5 inch 256GB Space Grey | Random  | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 18          | SL11UP   | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  | Tablet       |
