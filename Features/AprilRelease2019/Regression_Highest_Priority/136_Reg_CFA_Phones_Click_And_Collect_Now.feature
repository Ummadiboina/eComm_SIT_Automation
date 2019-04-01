Feature: 136_Reg_CFA_Phones_Click_And_Collect_Now

  @Web
  Scenario Outline: 136_Reg_CFA_Phones_Click_And_Collect_Now
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page for color selection
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
    And Check the availability to collect from store now in product details page
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset        | Username     | Firstname | Surname | color        | consumer | BSCstatus | BillCap   | CapAmount | B1     | B2     | B3  | B4  | Text   | Email  | Phone  | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | Huawei P20 Pro | TEST ACCEPTA | Test      | Accepta | Lilac Purple | Me       | Enabled   | CapMyBill | £0        | Select | Select | Not | Not | Select | Select | Select | Select | Enabled    | No        | Connected  | No          | No       |