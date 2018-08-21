Feature: 20_Reg_AFA_PayG_withoutAnyAccessory

  @Web

  Scenario Outline: Successful completion of a PAY G handset acquisition Journey without an accessory
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device                    | Tariffs | DeliveryType | Firstname | Surname | HouseNumber | PostCode | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone X 256GB Space Grey | Random  | HomeDelivery | TEST      | ACCEPTA | 4           | SL11UP   | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
