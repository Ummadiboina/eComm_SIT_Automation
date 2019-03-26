Feature: 01_CFA_Simo_PayM_12_months_contract_option_should_be_selected_by_default_when_lands_on_Phone_Tablet_MBB_Tab

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 12 months contract option is selected by default when lands on Phone/Tablet/MBB Tab


  @Web
  Scenario Outline: 01_CFA_Simo_PayM_12_months_contract_option_should_be_selected_by_default_when_lands_on_Phone_Tablet_MBB_Tab

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Verify 12 Months contract option is selected by default when lands on PayM_Sim_only
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