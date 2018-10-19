Feature: 78_Reg_FNT_PayMPhonesAdditionalDepositConfirmation

  @Web
  Scenario Outline: FNT CFA PayM phones Additional information and Order confirmed
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
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    #Then Additional information page should be displayed
    #And upon entering Valid details with valid new <Username2> and card number
    And upon entering Valid details for card number
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Firstname | Surname | Username     | handset       | color      | BSCstatus | BillCap   | CapAmount | Username2    | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | test      | acceptb | test acceptb | iPhone 8 Plus | Space Grey | Enabled   | CapMyBill | £200      | TEST ACCEPTB | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
