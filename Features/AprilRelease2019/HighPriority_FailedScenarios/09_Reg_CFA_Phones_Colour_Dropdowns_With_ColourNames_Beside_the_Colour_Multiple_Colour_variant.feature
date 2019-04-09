Feature: 09_Reg_CFA_Phones_Colour_Dropdowns_With_ColourNames_Beside_the_Colour_Multiple_Colour_variant

  @Web
  Scenario Outline: CFA_Phones_Colour_Dropdowns_With_ColourNames_Beside_the_Colour_Multiple_Colour_variant
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
   # And select a color
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And input the below details in Delivery page
      #| HouseNumber           | 5            |
      #| Post Code             | BS7 0NP      |
      #| Title                 | Mr           |
      #| FirstName             | Test         |
      #| Surname               | Accepta      |
      #| Contact Number        | 07123456789  |
      #| Password              | TesterSit123 |
      #| Security Answer       | Sit Testers  |
      #| Date of Birth - Date  | 25           |
      #| Date of Birth - Month | 01           |
      #| Date of Birth - Year  | 1957         |
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | Username     | Firstname | Surname | color      | consumer | BSCstatus | BillCap   | CapAmount | B1     | B2     | B3  | B4  | Text   | Email  | Phone  | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | TEST ACCEPTA | Test      | Accepta | Space Grey | Me       | Enabled   | CapMyBill | £0        | Select | Select | Not | Not | Select | Select | Select | Select | Enabled    | No        | Connected  | No          | No       |