Feature: 15_CFU_Validate_BSC_Component_In_Upgrade_Options_Page_for_Pre_Q1_2018_Tariff

  This scenario ensures that consumer in upgrade journey of MBB with tariff is able to edit the BSC component from Basket page and select cap my bill and place the order successfully

  @Web
  Scenario Outline: 15_CFU_Validate_BSC_Component_In_Upgrade_Options_Page_for_Pre_Q1_2018_Tariff
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on MBB section in upgrade options page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    #And Land on the 'Tariffs and extra' page
    And Click on 'Select' CTA to buy a valid <tariffAmt> and <dataValue>
    And Validate consumer Bill Spend Caps section when BSC is <Q1TariffBSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Agreements page and confirm all the agreement checks
    And Validate applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <Q1TariffBSCstatus>
    Then verify cover me is present in  pdf download
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                      | password | tariffAmt | dataValue | Device_Name   | houseNumber | PostCode | BillCap       | CapAmount | Q1TariffBSCstatus | BSCstatus | Username     | Action    | tariff                   | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | 02fe58138853@stf.ref.o2.co.uk | test123  | £18       | 6GB       | Random Device | 11          | SL11ER   | DontCapMyBill | Nill      | Disabled          | Enabled   | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |
