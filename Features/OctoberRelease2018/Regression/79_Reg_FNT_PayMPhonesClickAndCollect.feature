Feature: 79_Reg_FNT_PayMPhonesClickAndCollect

  @Web
  Scenario Outline: FNT CFA PayM Phones Click and collect scenario with E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    # And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #AND veriy Confirmation Page

    #And Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | handset       | color      | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | consumer | B1     | B2     | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | Space Grey | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £30       | Me       | Select | Select | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
