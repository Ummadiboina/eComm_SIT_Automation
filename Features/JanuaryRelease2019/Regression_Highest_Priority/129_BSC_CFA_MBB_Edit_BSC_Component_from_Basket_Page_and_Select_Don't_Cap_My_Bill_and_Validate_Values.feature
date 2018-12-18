Feature: 129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don't_Cap_My_Bill_and_Validate_Values

  This scenario ensures that consumer in acquisition journey of MBB with tariff is able to edit the BSC component from Basket page and select don't cap my bill and place the order successfully

  @Web
  Scenario Outline: 129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don't_Cap_My_Bill_and_Validate_Values
    Given I am an CFA user and Lands on shop page
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link at basket page to change <BillCap> <CapAmount>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Review page and review the order
    When order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | Device_Name   | Firstname | Surname | Username     | BillCap   | CapAmount | NewBillCap | NewCapAmount      | BSCstatus | color      | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | CapMyBill | £5        | CapMyBill  | DontCapMyBillLink | Enabled   | Space Grey | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |
