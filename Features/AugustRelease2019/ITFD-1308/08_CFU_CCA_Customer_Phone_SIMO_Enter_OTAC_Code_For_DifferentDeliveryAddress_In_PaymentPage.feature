Feature: 08_CFU_CCA_Customer_Phone_SIMO_Enter_OTAC_Code_For_DifferentDeliveryAddress_In_PaymentPage


  @Web
  Scenario Outline: 05_CFU_CCA_Customer_Tablet_SIMO_Enter_OTAC_Code_For_DifferentDeliveryAddress_In_ReviewAndConfirmPage
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And click on the 'Tablets' tab
    And Select any Random Data Tariff in the displayed list of Tariffs under different <contractLength> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    And Click on 'Use a different delivery address'link in upgrade simo journey
    And perform <Action> in OTAC page in upgrade simo journey
    And enter <houseNumber> and <postCode> in Delivery section to set different delivery address
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And copy text SIM delivery required or not is displayed
    And Select 'I need a new sim' option
    And Click on 'Use a different delivery address'link and perform <Action> in OTAC page in upgrade simo journey
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on GDPR Continue CTA in Simo upgrade
    Then order confirmation is displayed
    Then verify cover me is present in  pdf download

    Examples:
      | username               | Action    | houseNumber | postCode | password | BillCap   | CapAmount         | BSCstatus | contractLength | Username     |
      | inavl0ww_356240@o2.com | enterCode |             | SL33FP   | test123  | CapMyBill | DontCapMyBillLink | Enabled   | 12 Months      | Test Accepta |

