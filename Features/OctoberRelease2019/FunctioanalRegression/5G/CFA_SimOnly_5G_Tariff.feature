Feature:CFA_SimOnly_5G_Tariff.feature

  This Scenario ensures that when the Customer in SIMO acquisition journey selects 'Pay Monthly Sims'and lands on
  'Pay Monthly sim deals' and verify 18 months contract is displayed before 12 months contract under Phone, Tablet and MBB
  Tab

  @Web
  Scenario Outline:CFA_SimOnly_5G_Tariff.feature

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Verify 12 Months contract option is selected by default when lands on PayM_Sim_only
    And Verify 18 Months contract is displayed under Phone Tablet MBB Tab
    And Verify 18 Months contract option is displayed as first button under Phone Tablet MBB Tab
    And Click on different <Contract>  Months Tariff in Tab
    And Select Recommended Tariff in the displayed list of Tariffs under different <Contract> tab
    And verify 18 months contract text is displayed in TE page
    And Select 5G tariff
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And verify 18 months contract text is displayed in basket page
    And click on "go to checkout" button
    And verify 18 months contract text is displayed in DPR page
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And verify 18 months contract text is displayed in DPR page
    And For SiMO land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And verify 18 months contract text is displayed in DPR page
    And Continue to Review page and review the order
    And verify 18 months contract text is displayed in confirmation page
    Then order confirmation is displayed

    Examples:
      | Contract  | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 12 Months | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
