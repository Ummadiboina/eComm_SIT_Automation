Feature: Order Confirmation_Likenewphone_Sim_Accessory

  @Web
  Scenario Outline: Order Confirmation_Likenewphone_Sim_Accessory
    When Given I am an CFA user and Lands on LikeNewPhone page and select
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
   #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #AND veriy Confirmation Page
    #And Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | handset      | color          | Firstname | BSCstatus | BillCap       | CapAmount | Surname | Username     | consumer | B1  | B2     | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | Galaxy Note9 | Midnight Black | TEST      | Enabled   | DontCapMyBill | Nill      | ACCEPTA | TEST ACCEPTA | Me       | Not | Select | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | No          |