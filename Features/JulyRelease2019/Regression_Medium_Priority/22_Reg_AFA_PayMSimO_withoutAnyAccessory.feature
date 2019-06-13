Feature: 22_Reg_AFA_PayMSimO_withoutAnyAccessory

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M SIMO acquisition Journey without an accessory
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid simo tariff <Tariff> from simo tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | Tariff | DeliveryType | Firstname | Surname | Username     | BSCstatus | BillCapAmount | HouseNumber | PostCode | Consumer | B1  | B2     | B3  | B4  | Text | Email  | Phone  | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | Simo   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | £60           | 6           | SL11UP   | Me       | Not | Select | Not | Not | Not  | Select | Select | Select | Enabled | No        | Connected  | Simo         |
