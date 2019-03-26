Feature: 11_Reg_CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk

  @Web
  Scenario Outline: CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk
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
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Delivery page"
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And input the below details in Delivery page
      #| HouseNumber           | 5            |
      #| Post Code             | BS7 0NP      |
      #| Title                 | Mr           |
      #| FirstName             | Test         |
      #| Surname               | Accepta      |
      #| Contact Number        | 07822837733  |
      #| Password              | TesterSit123 |
      #| Security Answer       | Sit Testers  |
      #| Date of Birth - Date  | 22           |
      #| Date of Birth - Month | 10           |
      #| Date of Birth - Year  | 1990         |
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Payments page"
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | tariffAmt | dataValue | color      | Firstname | Surname | consumer | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | £39       | 8GB       | Space Grey | Test      | Accepta | Me       | Enabled   | CapMyBill | £10       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
