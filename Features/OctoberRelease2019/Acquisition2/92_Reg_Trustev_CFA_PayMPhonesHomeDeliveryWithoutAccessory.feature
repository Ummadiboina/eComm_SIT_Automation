Feature: 92_Reg_Trustev_CFA_PayMPhonesHomeDeliveryWithoutAccessory

  #launch hooks and get browser

  @Web
  Scenario Outline: Trustev PayM Phones Home delivery E2E journey without accessory

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
   # And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order for Trustev details
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    #Close the browser
    Examples:
      | handset       | color | Capacity | Firstname | Surname | BSCstatus | BillCap   | CapAmount         | Username     | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone  | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | iPhone XR     | White | 64GB     | TEST      | ACCEPTA | Enabled   | CapMyBill | DontCapMyBillLink | TEST ACCEPTA | Me       | Select | Not | Select | Not | Select | Select | Select | Select | Enabled    | No        | Connected  | No          | No       |