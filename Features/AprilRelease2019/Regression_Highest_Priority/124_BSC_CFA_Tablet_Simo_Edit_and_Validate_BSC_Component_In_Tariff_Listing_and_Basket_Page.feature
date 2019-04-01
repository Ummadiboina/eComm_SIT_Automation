Feature: 124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page

  This scenario ensures when customer on Tablet SIMO acquisition journey lands on Tariff listing page should be able to edit tariff and BSC components, select cap my bill and submit the order successfully

  @Web
  Scenario Outline: 124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'Tablets' tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate BSC 'Edit' link
    And Validate and click on Tariff 'Edit' link
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract | Firstname | Surname | Username     | BillCap   | CapAmount | NewBillCap    | NewCapAmount | BSCstatus | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | CapMyBill | £20       | DontCapMyBill | Nill         | Enabled   | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled    | No        | Connected  | No          | No       |
