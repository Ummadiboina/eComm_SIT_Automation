Feature: 17_Reg_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement

  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page, then the customer should be displayed with 'Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect

  @Web
  Scenario Outline: CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    #And Select a <Tablet> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And I Land on the basket page and choose to collect from store
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Enter details in Delivery page for Click and collect
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    #And Enter details in Delivery page for Click and collect and Click on the 'Continue button'
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                                                | password | Firstname | Surname | BSCstatus | BillCap   | CapAmount | Tablet             | color      | Capacity | Username     | Action    | tariff | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | stester11e0d84cec-f299-408b-b34d-205de468ec9e@gmail.com | test123  | Test      | Accepta | Enabled   | CapMyBill | £30       | iPad Pro 10.5 inch | Space Grey | 512GB    | TEST ACCEPTA | enterCode |        | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
