Feature:87_Reg_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary

  @Web
  Scenario Outline: PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Verify the copytext of marketing message
    And I Land on the basket page and choose home delivery option
    And Verify the copytext of marketing message
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    #And Verify the copytext of marketing message in <AgreementSectionName>
    And Continue to Review page and review the order
    #And Verify the copytext of marketing message in <ReviewSectionName>
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Device | Firstname | Surname | Username     | BSCstatus | PaymentSectionName | AgreementSectionName | tariff        | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | A3 10  | TEST      | ACCEPTA | TEST ACCEPTA | Disabled  | Payment Page       | Order Summary        | 1GB Preloaded | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  |