Feature: 43_Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box

  @Web
  Scenario Outline:
  This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery,
  then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page, check if the selected device is Delayed Delivery
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details in delivery page
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    #Step 12 and Step 13 of ALM clubbed together
    #Close the browser
    Examples:
      | handset  | Capacity | Firstname | Surname | Username     | Status           | BSCstatus | BillCap   | CapAmount | color | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | iPhone 8 | 64GB     | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Enabled   | CapMyBill | £10       | Gold  | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |