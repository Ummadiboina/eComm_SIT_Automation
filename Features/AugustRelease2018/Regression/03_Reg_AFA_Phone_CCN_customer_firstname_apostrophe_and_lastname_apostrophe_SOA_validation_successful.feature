Feature: 03_Reg_AFA_Phone_CCN_customer_firstname_apostrophe_and_lastname_apostrophe_SOA_validation_successful

  This scenario ensures that the Agent shop accepts Apostrophe in First Name and Last Name fields

  @Web
  Scenario Outline: ConsumerShopToAcceptApostrophe

    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

      # And Update Device Plan Link Email Address
      # Then CCALink Should be generated
    Examples:
      | Device                        | Tariffs | Extras | DeliveryType | Firstname | Surname  | Username     | HouseNumber | PostCode | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |
      | Sony Xperia XZ2 Compact Black | Refresh | Base   | HomeDelivery | test'     | accepta' | TEST ACCEPTA | 14          | SL11UP   | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Someone  | Enabled | No        | Connected  | Phone        |
