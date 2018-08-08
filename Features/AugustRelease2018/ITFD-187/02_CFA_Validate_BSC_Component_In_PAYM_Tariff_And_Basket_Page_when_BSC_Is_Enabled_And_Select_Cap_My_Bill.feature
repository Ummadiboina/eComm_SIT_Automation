Feature: 02_CFA_Validate_BSC_Component_In_PAYM_Tariff_And_Basket_Page_when_BSC_Is_Enabled_And_Select_Cap_My_Bill

  This scenario ensures when customer on SIMO acquisition journey lands on PAYM Tariffs page and Basket page, then Spend cap section should be displayed when BSC is enabled. Your order section of checkout pages should include Spend cap section

  @Web
  Scenario Outline: 02_CFA_Validate_BSC_Component_In_PAYM_Tariff_And_Basket_Page_when_BSC_Is_Enabled_And_Select_Cap_My_Bill
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate 'Edit' link
    And I Land on the Plan included basket page and choose home delivery option
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on 'Edit' link
    And Validate consumer Bill Spend Caps section and choose your cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Contract | Firstname | Surname | Username     | BillCap   | CapAmount | NewCapAmount | BSCstatus | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | CapMyBill | £5        | £10          | Enabled   | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  |
