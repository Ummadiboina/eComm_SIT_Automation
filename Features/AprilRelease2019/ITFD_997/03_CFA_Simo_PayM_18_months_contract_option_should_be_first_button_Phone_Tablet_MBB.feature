Feature:03_CFA_Simo_PayM_18_months_contract_option_should_be_first_button_under_Phone_Tablet_MBB_Tab

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 18 months contract option is displayed as a contract first button under Phone, Tablet and
  MBB Tab


  @Web
  Scenario Outline:03_CFA_Simo_PayM_18_months_contract_option_is_first_button_under_Phone_Tablet_MBB_Tab

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Verify 18 Months contract option is displayed as first button under Phone Tablet MBB Tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed



    Examples:
      | Contract  | Firstname | Surname | Username     |
      | 18 Months | TEST      | ACCEPTA | TEST ACCEPTA |
