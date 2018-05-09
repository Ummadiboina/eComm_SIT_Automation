Feature: Reg_AFA_PayMSimO_withoutAnyAccessory

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M SIMO acquisition Journey without an accessory
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFA journey
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFA journey
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples: 
      | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |consumer | B1  | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | SimO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           6 | SL11UP   |Me       | Not | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
