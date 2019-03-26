Feature: 12_CFU_Simo_PayM_18months_contarct_option_should_display_and should_be_first_option_under_Phone_Tablet_MBB_Tab

  This scenario ensures that when  a customer in an upgrade journey and selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 18 months contract option should be display and should be first button under
  under Phone/Tablet/MBB Tab

  @Web
  Scenario Outline: 12_CFU_Simo_PayM_18months_contarct_option_should_display_and should_be_first_option_under_Phone_Tablet_MBB_Tab


    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And Verify 18 Months contract is displayed under Phone Tablet MBB Tab
    And Verify 18 Months contract option is displayed as first button under Phone Tablet MBB Tab
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






