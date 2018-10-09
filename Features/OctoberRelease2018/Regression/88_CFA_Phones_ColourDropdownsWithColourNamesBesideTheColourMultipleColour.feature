Feature: 88_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  @Web
  Scenario Outline: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    # And select a color
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input the below details in Delivery page
     # | HouseNumber           | 5            |
      #| Post Code             | BS7 0NP      |
      #| Title                 | Mr           |
      #| FirstName             | Test         |
      #| Surname               | Accepta      |
      #| Contact Number        | 07123456789  |
      #| Password              | TesterSit123 |
      #| Security Answer       | Sit Testers  |
      #| Date of Birth - Date  | 22           |
      #| Date of Birth - Month | 10           |
      #| Date of Birth - Year  | 1990         |
   # And Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    #Close the browser
    Examples:
      | handset       | Username     | Firstname | Surname | color      | CFATariffColour | consumer | BSCstatus | BillCap       | CapAmount | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | TEST ACCEPTA | Test      | Accepta | Space Grey | Gold            | Me       | Enabled   | DontCapMyBill | Nill      | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |