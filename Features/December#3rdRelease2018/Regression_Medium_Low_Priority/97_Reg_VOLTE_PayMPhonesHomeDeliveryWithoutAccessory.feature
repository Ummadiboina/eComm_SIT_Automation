Feature: 97_Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory

  #launch hooks and get browser
  @Web
  Scenario Outline: Volte PayM Phones Home delivery E2E journey without accessory
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
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed with Volte message
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | handset  | color | Firstname | Surname | Username     | consumer | BSCstatus | BillCap   | CapAmount | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType | PreSelected |
      | iPhone 7 | Black | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Enabled   | CapMyBill | £5        | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  | No          |
