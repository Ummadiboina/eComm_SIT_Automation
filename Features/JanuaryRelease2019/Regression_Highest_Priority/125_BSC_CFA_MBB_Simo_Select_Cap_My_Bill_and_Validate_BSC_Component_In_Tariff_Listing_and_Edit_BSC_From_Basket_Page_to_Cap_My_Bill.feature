Feature: 125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill

  This scenario ensures when customer on MBB SIMO acquisition journey lands on Tariff listing page should be able to edit tariff and verify BSC components, edit BSC to cap my bill from basket page and submit the order successfully

  @Web
  Scenario Outline: 125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'MBB' tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link at basket page to change <NewBillCap> <NewCapAmount>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <NextNewBillCap> <NextNewCapAmount> when BSC is <BSCstatus>
    #Commented below step because of package option page changes, once we select BSC bolton it will directly land on basket page
    #And I Land on the Plan included basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <NextNewBillCap> <NextNewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate applied Bill Spend Cap <NextNewBillCap> <NextNewCapAmount> when BSC is <BSCstatus>
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Validate applied Bill Spend Cap <NextNewBillCap> <NextNewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NextNewBillCap> <NextNewCapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract | Firstname | Surname | Username     | BillCap       | CapAmount | NewBillCap | NewCapAmount      | NextNewBillCap | NextNewCapAmount | BSCstatus | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | DontCapMyBill | Nill      | CapMyBill  | DontCapMyBillLink | CapMyBill      | £0               | Enabled   | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled    | No        | Connected  | No          | No       |
