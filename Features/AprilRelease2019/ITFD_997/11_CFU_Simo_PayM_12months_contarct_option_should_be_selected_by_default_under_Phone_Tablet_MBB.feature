Feature: 11_CFU_Simo_PayM_12months_contarct_option_should_be_selected_by_default_under_Phone_Tablet_MBB_Tab

     This scenario ensures that when  a customer in an upgrade journey and selects 'Pay Monthly Sims'and lands on
     'Pay Monthly sim deals' and verify 12 months contract option is selected by default under Phone/Tablet/MBB Tab

  @Web
  ScenarioOutline: 11_CFU_Simo_PayM_12months_contarct_option_should_be_selected_by_default_under_Phone_Tablet_MBB_Tab

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Verify 12 Months contract option is selected by default when lands on PayM_Sim_only
    And I click on 'Sim only Tariff' tab
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
      | 12 months   | in02818o_785853@o2.com | Enabled   | DontCapMyBill | Nill      | test123  |



