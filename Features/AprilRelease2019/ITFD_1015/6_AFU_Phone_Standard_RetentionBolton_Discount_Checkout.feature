Feature: 6_AFU_Phone_Standard_RetentionBolton_Discount_Checkout

  AFU	Phone	Standard	Retention Bolton	Device/Tariff discount	Checkout

  @Web
  Scenario Outline: 6_AFU_Phone_Standard_RetentionBolton_Discount_Checkout
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify Saved basket after adding the retention items for Standard tariff <RetentionBolton>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType | PreSelected | RetentionBolton |
      | 07521121757 | dongle | Random  | Enabled   | £5            | Me       | Select | Not | Not | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  | No          | yes             |