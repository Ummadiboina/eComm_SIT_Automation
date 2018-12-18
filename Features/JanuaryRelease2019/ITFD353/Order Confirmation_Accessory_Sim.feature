Feature: Order Confirmation_Accessory_Sim

  @Web
  Scenario Outline: Order Confirmation_Accessory_Sim

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the Plan included basket page and choose Continue Shopping
    And Navigate to Accessories
    #And Select <accessoryname> from accessories
    And select an "Random" Accessory with Quanity <limit1>
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    When order confirmation is displayed
    #AND veriy Confirmation Page
    #And Validate consumer GDPR consent section is hidden in Order confirmation page or not
    Examples:
      | Contract | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | limit1 | consumer | B1  | B2     | B3  | B4  | Text   | Email | Phone  | Post    | status | MBBStatus |
      | 30 Days  | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £0        | 2      | Not      | Not | Select | Not | Not | Select | Not   | Select | Enabled | No     | Connected |
