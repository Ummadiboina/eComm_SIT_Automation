Feature: 25_CFA_PAYM_Tablet_Validate_BSC_Component_In_Tariff_and_Extras_Page_for_Post_Q1_2018_Tariff_When_BSC_Is_Disabled

  This scenario ensures that consumer in acquisition journey for PAYM Tablets with tariff should not be displayed with BSC component in Upgrade options page

  @Web
  Scenario Outline: 25_CFA_PAYM_Tablet_Validate_BSC_Component_In_Tariff_and_Extras_Page_for_Post_Q1_2018_Tariff_When_BSC_Is_Disabled
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <Q1TariffBSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And click on "go to checkout" button
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And enter a <Firstname> and <Surname> and ten digit home number
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Review page and review the order
    When order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    Then verify cover me is present in  pdf download
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Device | Firstname | tariffAmt | dataValue | Surname | Username     | BillCap       | Q1TariffBSCstatus | CapAmount | NewBillCap    | NewCapAmount | BSCstatus | color      | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | A3 10  | TEST      | £18       | 6GB       | ACCEPTA | TEST ACCEPTA | DontCapMyBill | Disabled          | £0        | DontCapMyBill | Nill         | Enabled   | Space Grey | Someone  | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
