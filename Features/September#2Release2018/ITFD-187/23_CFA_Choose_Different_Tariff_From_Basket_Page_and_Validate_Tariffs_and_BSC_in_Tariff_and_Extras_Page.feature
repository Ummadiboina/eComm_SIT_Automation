Feature: 23_CFA_Choose_Different_Tariff_From_Basket_Page_and_Validate_Tariffs_and_BSC_in_Tariff_and_Extras_Page

  This scenario ensures that when consumer in Acquisition journey for Tablets selects Choose a different tariff link in Basket page and land on Tariff and extras page should be displayed with BSC component and tariff view as fresh

  @Web
  Scenario Outline: 23_CFA_Choose_Different_Tariff_From_Basket_Page_and_Validate_Tariffs_and_BSC_in_Tariff_and_Extras_Page
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on Tariff 'Edit' link
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
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
      | handset       | Firstname | tariffAmt | dataValue | Surname | Username     | BillCap   | Q1TariffBSCstatus | CapAmount | NewBillCap    | NewCapAmount | BSCstatus | color      | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | TEST      | £18       | 6GB       | ACCEPTA | TEST ACCEPTA | CapMyBill | Disabled          | £0        | DontCapMyBill | Nill         | Enabled   | Space Grey | Someone  | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
