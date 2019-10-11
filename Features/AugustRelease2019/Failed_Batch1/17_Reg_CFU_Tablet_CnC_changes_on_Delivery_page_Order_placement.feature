Feature: 17_Reg_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement

  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page, then the customer should be displayed with 'Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect

  @Web
  Scenario Outline: CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Verify phones tab selected by default
    And Click on Tablet section in upgrade options page
    And Verify tablets vertical upgrade journey is removed or not
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Enter details in Delivery page for Click and collect
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    #And Enter details in Delivery page for Click and collect and Click on the 'Continue button'
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | password | Firstname | Surname | BSCstatus | BillCap   | CapAmount | Tablet             | color      | Capacity | Username     | Action    | tariff | consumer | B1  | B2  | B3     | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 05ap93391997@stf.ref.o2.co.uk | test123  | Test      | Accepta | Enabled   | CapMyBill | £30       | iPad 9.7 inch 2018 | Space Grey | 32GB     | TEST ACCEPTA | enterCode |        | Me       | Not | Not | Select | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | Yes         | No       |