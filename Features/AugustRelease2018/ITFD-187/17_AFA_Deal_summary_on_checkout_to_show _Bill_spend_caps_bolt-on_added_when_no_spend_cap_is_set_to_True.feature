Feature: 17_AFA_Deal_summary_on_checkout_to_show _Bill_spend_caps_bolt-on_added_when_no_spend_cap_is_set_to_True

  This scenario ensures that Deal summary on checkout to show 'Bill spend caps' bolt-on added when an agent creates
  a valid PAYM(Refresh, Standard or SIMO) deal

  @Web
  Scenario Outline: 17_AFA_Deal_summary_on_checkout_to_show _Bill_spend_caps_bolt-on_added_when_no_spend_cap_is_set_to_True
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify that the error <IncompatibleError> is displayed in the deal about the conflict
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>

    Examples:
      | Device | Tariffs | DeliveryType | BillCapAmount    | BSCstatus | IncompatibleError | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1  | B2  | B3     | B4  | Text   | Email  | Phone | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | Tablet | Refresh | HomeDelivery | Dont cap my bill | Enabled   | Error             | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Me       | Not | Not | Select | Not | Select | Select | Not   | Select | Enabled | No        | Connected  | Phone        |
