Feature: 28_AFA_NewConnection_PAYM_Tablets_Refresh_GDPR_Enabled_EndUser_MP_OptOut

  #launch hooks and get browser
  @Web
  Scenario Outline: 28_AFA_NewConnection_PAYM_Tablets_Refresh_GDPR_Enabled_EndUser_MP_OptOut
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status>
    And Choose <DeliveryType> delivery address and delivery time
    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed


    Examples:
      | Device | Tariffs | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | B1  | B2  | B3  | B4  | Text   | Email | Phone  | Post |Consumer|status|Password|confirmPassword|SecurityAnswer|
      | tablet | Refresh  | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 18          | SL11UP   | Not | Not | Not | Not |Not|Not | Not | Not|Me      |Enabled|test123             |test123        |              |
