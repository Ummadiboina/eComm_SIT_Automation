Feature:07_CFA_PayM_Simo_Unlimited_data_displayed_under_recommended_tariff_under_Phone_Tablet_MBB

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify Unlimited data is displaying under recommended tariff from Phone/Tablet/MBB


  @Web
  Scenario Outline:07_CFA_PayM_Simo_Unlimited_data_displayed_under_recommended_tariff_under_Phone_Tablet_MBB

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Verify unlimited data is displayed under recommended tariff from <Contract> option
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