Feature: 20_CFA_Like_New_Phones_Edit_BSC_Component_from_Your_Package_in_Tariff_and_Extras_Page_and_Select_Cap_My_Bill

  This scenario ensures that consumer in Acquisition journey of Like New phone with tariff is able to edit the BSC component from your package section and select cap my bill and place the order successfully

  @Web
  Scenario Outline: 20_CFA_Like_New_Phones_Edit_BSC_Component_from_Your_Package_in_Tariff_and_Extras_Page_and_Select_Cap_My_Bill
    Given I am an CFA user and Lands on shop page
    And navigate to Like New Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Choose your bill cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Review page and review the order
    When order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset           | Firstname | Surname | Username     | BillCap   | CapAmount | NewCapAmount | BSCstatus | color      | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Like New | TEST      | ACCEPTA | TEST ACCEPTA | CapMyBill | £5        | £10          | Enabled   | Space Grey | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
