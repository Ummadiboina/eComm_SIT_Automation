Feature: 64_Reg_CS_PayMSimOnly

  @Web
  Scenario Outline: Sim Only PayM 30Days E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for SimOnly
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Contract | Firstname | Surname | Username     | BSCstatus | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | Disabled  | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  |
