Feature: 20_AFA_Verify_that_the_BSC_component_is_not_displayed_when_the_BSC_flag_is_off

  This scenario ensures that when the BSC flag is off the agent SHOULD not be presented with 'Bill spend caps' section

  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>

    Examples:
      | Device | Tariffs | DeliveryType | BillCapAmount | BSCstatus | IncompatibleError | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1  | B2  | B3     | B4  | Text   | Email  | Phone | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | Tablet | Refresh | HomeDelivery | Nill          | Disabled  | Error             | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Me       | Not | Not | Select | Not | Select | Select | Not   | Select | Enabled | No        | Connected  | Phone        |