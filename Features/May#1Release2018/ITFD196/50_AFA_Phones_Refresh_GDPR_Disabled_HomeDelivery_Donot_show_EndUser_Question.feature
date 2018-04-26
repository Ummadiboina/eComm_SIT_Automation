Feature: 50_AFA_Phones_Refresh_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question

  #launch hooks and get browser
  @Web
  Scenario Outline: 50_AFA_Phones_Refresh_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question
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
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status>
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated
    Examples:
      | Device              | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1  | B2  | B3  | B4  | Text | Email    | Phone     | Post |Consumer |status|
      | Galaxy S8 Plus 64GB | Random  | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Not | Not | Not | Not |Not|Not | Not | Not|Me       |Disabled|
