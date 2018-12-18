Feature: 62_Reg_CS_PayMPhonesHomeDeliveryWithAccessory

  @Web
  Scenario Outline: CFA PayM Phones Home delivery E2E journey with Accessory
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
   #edit the above
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | handset      | color          | Firstname | BSCstatus | BillCap       | CapAmount | Surname | Username     | consumer | B1  | B2     | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | Galaxy Note9 | Midnight Black | TEST      | Enabled   | DontCapMyBill | Nill      | ACCEPTA | TEST ACCEPTA | Me       | Not | Select | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | No          |