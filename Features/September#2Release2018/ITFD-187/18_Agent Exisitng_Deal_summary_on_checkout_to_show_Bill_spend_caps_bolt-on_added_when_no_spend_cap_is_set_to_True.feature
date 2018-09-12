Feature: 18_Agent Exisitng_Deal_summary_on_checkout_to_show_Bill_spend_caps_bolt-on_added_when_no_spend_cap_is_set_to_True

  This scenario ensures that when Agent in Existing customer journey adds BSC bolton then no incompatible error
  should be displayed in deal builder

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify that the error <IncompatibleError> is displayed in the deal about the conflict
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>

    Examples:
      | user        | Device | Tariffs  | DeliveryType | BillCapAmount   | BSCstatus | IncompatibleError | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1  | B2  | B3     | B4  | Text   | Email  | Phone | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | 07801445776 | Phones | Standard | HomeDelivery | Dont cap my bil | Enabled   | Error             | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Me       | Not | Not | Select | Not | Select | Select | Not   | Select | Enabled | No        | Connected  | Phone        |
