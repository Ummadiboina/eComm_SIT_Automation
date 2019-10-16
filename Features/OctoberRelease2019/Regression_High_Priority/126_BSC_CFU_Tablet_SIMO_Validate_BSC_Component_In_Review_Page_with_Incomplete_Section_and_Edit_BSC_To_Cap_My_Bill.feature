Feature: 126_BSC_CFU_Tablet_SIMO_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_and_Edit_BSC_To_Cap_My_Bill

  This scenario ensures when customer on Tablet SIMO upgrade journey lands on Review & confirm page and edit BSC component to cap the bill then customer should be redirected to next incomplete section and place your order CTA should be disabled until all the sections are incomplete

  @Web
  Scenario Outline: 126_BSC_CFU_Tablet_SIMO_Validate_BSC_Component_In_Review_Page_with_Incomplete_Section_and_Edit_BSC_To_Cap_My_Bill
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    #And click on the 'Tablets' button
    #And Click on 'Select' CTA to buy a tariff
    #And copy text SIM delivery required or not is displayed
    #And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And click on the 'Tablets' tab
    And the two contract lenght should be displayed
    And the data filters is displayed
    And Select any Random Data Tariff in the displayed list of Tariffs under different <contractLength> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    Then I should see 'Your Sim Card'section in upgrade
    And Select 'I need a new sim' option
    And Click on 'Use a different delivery address'link in upgrade simo journey
    And perform <Action> in OTAC page in upgrade simo journey
    And enter <houseNumber> and <postCode> in Delivery section to set different delivery address
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA in Simo upgrade
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                                                | Action    | houseNumber | postCode | password | BillCap       | CapAmount | NewBillCap | NewCapAmount | BSCstatus | contractLength | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | stester1188913e17-b549-41d4-8b28-bfd19a43d5bc@gmail.com | enterCode |             | SL33FP   | test123  | DontCapMyBill | Nill      | CapMyBill  | £10          | Enabled   | 12 Months      | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |

