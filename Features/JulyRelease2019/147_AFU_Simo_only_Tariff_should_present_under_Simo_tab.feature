Feature: 147_AFU_Simo_only_Tariff_should_present_under_Simo_tab.feature
  This scenario ensures that when agent on upgrade journey selects Simo tab and verify simo only tariffs are
  present under Simo tab and follow to end the journey


  @Web
  Scenario Outline: 147_AFU_Simo_only_Tariff_should_present_under_Simo_tab.feature


    Given I login to Agent shop
    And performs Upgrade for <user>
    And Verify No simo tariff under tariffs tab
    And Verify simo only tariff under simo tariffs tab
    And Select valid simo tariff <Tariff> from simo tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | Tariff |user        |DeliveryType | Firstname | Surname  | Username     | BSCstatus | BillCapAmount | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |Password|confirmPassword|SecurityAnswer|
      | Simo   |07521126569 |HomeDelivery | TEST      | ACCEPTA  | Test accepta | Enabled   | £20           | 6           | SL11ER   | Select | Not | Select | Not | Select | Select | Not   | Not  | Me       | Enabled | No        | Connected  | Simo        |test1234|test1234        |Test          |