Feature: 65_Reg_CS_PayMSimOnlyRecommendedTariff

  @Web
  Scenario Outline: Sim Only PayM Recommended Tariff selection E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Click on SIMO Add to Basket CTA
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>
    #30 Days
    Examples:
      | Contract  | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | consumer | B1  | B2     | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 12 Months | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Me       | Not | Select | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
