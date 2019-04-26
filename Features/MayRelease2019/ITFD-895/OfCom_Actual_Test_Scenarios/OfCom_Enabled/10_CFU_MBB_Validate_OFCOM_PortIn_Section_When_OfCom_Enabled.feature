Feature: 10_CFU_MBB_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline: 10_CFU_MBB_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
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
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    #And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    #And Continue to Agreements page and confirm all the agreement checks
    #And Continue to Review page and review the order
    #Then order confirmation is displayed


    Examples:
      | username                      | password | Device_Name   | BSCstatus | BillCap       | CapAmount | Username     | Action    | journey | ofComStatus | codeStatus | ofComMobileNum | pacStacCode |
      | dono97392353@stf.ref.o2.co.uk | test123  | Random Device | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | enterCode | CFU     | Enabled     | Nill       | Nill           | Nill        |
