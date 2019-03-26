Feature:17_CFU_PayM_Simo_Unlimited_data_text_is_displayed_under_up_to_confirmation_from_Phone_Tab

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify Unlimited data is displayed up to confirmation page from Phone Tab

  @Web
  Scenario Outline:17_CFU_PayM_Simo_Unlimited_data_text_is_displayed_under_up_to_confirmation_from_Phone_Tab


    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And verify Unlimited data is displayed in Tariff and Extras page
    And copy text SIM delivery required or not is displayed
    And verify Unlimited data is displayed in Review and confirm page
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on 'Place your order' CTA
    And verify Unlimited data is displayed in confirmation page
    Then order confirmation is displayed
    Examples:
      | Contract    | username               | BSCstatus | BillCap       | CapAmount | password |
      |  12 months  | in02818o_785853@o2.com | Enabled   | DontCapMyBill | Nill      | test123  |








