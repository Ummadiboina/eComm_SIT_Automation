Feature: 05_CFA_Simo_PayM_18_months_contract_should_display_up_to_confirmation_page_under_Tablet_Tab

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 18 months contract text is displaying up to confirmation page from Tablet Tab

  @Web
  Scenario Outline: 05_CFA_Simo_PayM_18_months_contract_should_display_up_to_confirmation_page_under_Tablet_Tab

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Select 'Tablets' tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And verify 18 months contract text is displayed in TE page
    And I Land on the Plan included basket page and choose home delivery option
    And verify 18 months contract text is displayed in basket page
    And click on "go to checkout" button
    And verify 18 months contract text is displayed in DPR page
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And verify 18 months contract text is displayed in DPR page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And verify 18 months contract text is displayed in DPR page
    And Continue to Review page and review the order
    And verify 18 months contract text is displayed in confirmation page
    Then order confirmation is displayed



    Examples:
      | Contract  | Firstname | Surname | Username     |
      | 18 Months | TEST      | ACCEPTA | TEST ACCEPTA |