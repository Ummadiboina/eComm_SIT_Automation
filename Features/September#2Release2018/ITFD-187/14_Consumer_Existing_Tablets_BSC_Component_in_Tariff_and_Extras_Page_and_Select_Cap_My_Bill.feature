Feature: 14_Consumer_Existing_Tablets_BSC_Component_in_Tariff_and_Extras_Page_and_Select_Cap_My_Bill

  This scenario ensures that consumer in existing customer journey for Tablets with tariff should be able to edit the BSC component from Your package section in Tariff and Extras page

  @Web
  Scenario Outline: 14_Consumer_Existing_Tablets_BSC_Component_in_Tariff_and_Extras_Page_and_Select_Cap_My_Bill
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    #And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And Validate Basket Page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And land on the payment page and input <Username> and other details for existing customer
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                      | password | tabletname        | houseNumber | PostCode | BillCap   | CapAmount | NewBillCap    | NewCapAmount      | BSCstatus | Username     | Action    | tariff                   | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | 12oc17594354@stf.ref.o2.co.uk | test123  | Galaxy Tab S3 9.7 | 11          | SL11ER   | CapMyBill | £5        | DontCapMyBill | DontCapMyBillLink | Enabled   | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Somone   | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |
