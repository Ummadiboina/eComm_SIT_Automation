Feature: 11_AFA_Validate_Incompatible_Error_Message_and_Checkout_Button_Status_After_Adding_BSC_Bolton

  This scenario ensures that when agent in acquisition journey adds BSC bolton then no incompatible error should be
  displayed in deal builder

  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Verify that the error <IncompatibleError> is displayed in the deal about the conflict
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify that the error <IncompatibleError> is displayed in the deal about the conflict
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>

    Examples:
      | Device | Tariffs | DeliveryType | BillCapAmount | BSCstatus | IncompatibleError | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1  | B2  | B3     | B4  | Text   | Email  | Phone | Post   | status  | MBBStatus | DeviceType | DeviceModule |
      | Tablet | Refresh | HomeDelivery | £5            | Enabled   | Error             | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | Me       | Not | Not | Select | Not | Select | Select | Not   | Select | Enabled | No        | Connected  | Phone        |