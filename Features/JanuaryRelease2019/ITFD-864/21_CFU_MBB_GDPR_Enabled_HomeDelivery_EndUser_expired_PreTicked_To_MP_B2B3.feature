Feature: 21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM MBB' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and Pre Ticked MP - B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on MBB section in upgrade options page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device_Name   | Action    | BSCstatus | BillCap   | CapAmount | Username     | username                      | password | B1  | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | enterCode | Enabled   | CapMyBill | £20       | TEST ACCEPTA | 10au66996482@stf.ref.o2.co.uk | test123  | Not | Select | Select | Not | Enabled    | Connected  | Yes         | No       |
