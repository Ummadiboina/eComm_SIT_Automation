Feature: 145_CFU_Simo_PayM_18months_contarct_under_Phone_Tablet_MBB_Tab

  This scenario ensures that when  a customer in an upgrade journey and selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 18 months contract option should be display and should be first button under
  under Phone/Tablet/MBB Tab
  145_CFU_Simo_PayM_18months_contarct_option_should_display_and should_be_first_option_under_Phone_Tablet_MBB_Tab

  @Web
  Scenario Outline: 145_CFU_Simo_PayM_18months_contarct_under_Phone_Tablet_MBB_Tab


    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    #And I click on 'Sim only Tariff' tab
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And Verify phones, tablet and MBB simo tabs displayed
    And Verify 12 Months contract option is selected by default when lands on PayM_Sim_only
    And Verify 18 Months contract is displayed under Phone Tablet MBB Tab
    And Verify 18 Months contract option is displayed as first button under Phone Tablet MBB Tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And verify 18 months contract text is displayed in basket page
    And copy text SIM delivery required or not is displayed
    And verify 18 months contract text is displayed in Review and confirm page
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on 'Place your order' CTA
    And verify 18 months contract text is displayed in confirmation page
    Then order confirmation is displayed

    Examples:
      | Contract  | username                      | BSCstatus | BillCap       | CapAmount | password |
      | 18 months | till60871354@stf.ref.o2.co.uk | Enabled   | DontCapMyBill | Nill      | test123  |
