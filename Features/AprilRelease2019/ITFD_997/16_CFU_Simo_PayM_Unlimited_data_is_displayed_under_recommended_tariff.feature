Feature: 16_CFU_PayM_Simo_Unlimited_data_displayed_under_recommended_tariff_from_Phone_Tablet_MBB_Tab

  This Scenario ensures that when the customer in an upgrade journey and select 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify unlimited data is displayed under recommended tariff under Phone, Tablet, MBB
  tab
  contract options

  @Web
  Scenario Outline: 16_CFU_PayM_Simo_Unlimited_data_displayed_under_recommended_tariff_from_Phone_Tablet_MBB_Tab

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And Verify unlimited data is displayed under recommended tariff from <Contract> option
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And copy text SIM delivery required or not is displayed
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Examples:
      | Contract    | username               | BSCstatus | BillCap       | CapAmount | password |
      |  12 months  | in02818o_785853@o2.com | Enabled   | DontCapMyBill | Nill      | test123  |












