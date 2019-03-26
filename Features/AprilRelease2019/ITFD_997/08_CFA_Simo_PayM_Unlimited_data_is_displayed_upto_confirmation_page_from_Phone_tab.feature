Feature:08_CFA_PayM_Simo_Unlimited_data_is_displayed_up_to_confirmation_page_under_from_Phone_Tab

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify Unlimited data text is displayed under recommended tariff up to confirmation
  page from Phone tab

  @Web
  Scenario Outline:08_CFA_PayM_Simo_Unlimited_data_displayed_under_recommended_tariff_up_to_confirmation_page_from_Phone_Tab

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract> Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And verify Unlimited data is displayed in Tariff and Extras page
    And I Land on the Plan included basket page and choose home delivery option
    And verify Unlimited data is displayed in basket page
    And click on "go to checkout" button
    And verify Unlimited data is displayed in delivery page
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And verify Unlimited data is displayed in Payment page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And verify Unlimited data is displayed in Review page
    And Continue to Review page and review the order
    And verify Unlimited data is displayed in confirmation page
    Then order confirmation is displayed



    Examples:
      | Contract  | Firstname | Surname | Username     |
      | 18 Months | TEST      | ACCEPTA | TEST ACCEPTA |