Feature: 02_CFU_Select_Tablet_Tariff_And_SpendCap_From_Phones_Simo_Listing_Page_And_Verify_In_Review_Page

  This scenario ensures that when an upgrade user selects 'Sim only Tariff' tab and lands on Simo listing page and
  selects 30 days Tablet tariff then customer should be able to select spend cap and same should be displayed in review
  and confirm page

  @Web
  Scenario Outline: 02_CFU_Select_Tablet_Tariff_And_SpendCap_From_Phones_Simo_Listing_Page_And_Verify_In_Review_Page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    Then the 'Phones' button should be selected by default
    And click on the 'Tablets' button
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And the data filters is displayed
    And Click on different <Contract>  Months Tariff in Tab
    And Click on 'Select' CTA to buy a tariff
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Validate and click on BSC 'Edit' link to change <BillCap> <CapAmount>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    And copy text SIM delivery required or not is displayed
    And Validate BSC 'Edit' link should not display in Review Page
    And Validate applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section in upgrade
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on GDPR Continue CTA
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    And Validate order confirmation page for applied Bill Spend Cap <NewBillCap> <NewCapAmount> when BSC is <BSCstatus>
    Then verify cover me is present in  pdf download

    Examples:
      | Contract | username                      | password | BillCap   | CapAmount | NewBillCap    | NewCapAmount | BSCstatus |
      | 30 Days  | 22ma73807935@stf.ref.o2.co.uk | test123  | CapMyBill | £30       | DontCapMyBill | Nill         | Enabled   |

