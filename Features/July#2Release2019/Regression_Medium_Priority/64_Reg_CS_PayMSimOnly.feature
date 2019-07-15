Feature: 64_Reg_CS_PayMSimOnly

  @Web
  Scenario Outline: Sim Only PayM 30Days E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Click on SIMO Add to Basket CTA
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And For SiMO land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Contract | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £0        | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled    | No        | Connected  | No          | No       |
