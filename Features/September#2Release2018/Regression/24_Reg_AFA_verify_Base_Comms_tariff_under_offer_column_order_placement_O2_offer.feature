Feature: 24_Reg_AFA_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer

  @Web
  Scenario Outline: This scenario ensures that when the Agent in acquisition journey access the 'Tariffs' tab, then the agent should be able to see 'Base Comms' tariff  highlighted or tagged differently along with normal tariffs and should be able to place order
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Verify that Basecomms is displayed in the offers section
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose HomeDelivery delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device                              | Tariffs | Extras | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | iPad Pro 10.5 inch 256GB Space Grey | Base    | Base   | Test      | Accepta | Test Accepta | 2           | SL11UP   | Me       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  | Tablet       |
