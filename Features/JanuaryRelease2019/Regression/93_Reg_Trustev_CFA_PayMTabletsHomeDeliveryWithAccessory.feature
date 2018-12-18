Feature: 93_Reg_Trustev_CFA_PayMTabletsHomeDeliveryWithAccessory

  @Web
  Scenario Outline: Trustev PayM Tablets Home delivery E2E journey with Accessory
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
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
    And Continue to Review page and review the order for Trustev details
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | Device | color | Capacity | Firstname | Surname | Username     | consumer | BSCstatus | BillCap   | CapAmount | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | A3 10  | Gold  | 64GB     | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Enabled   | CapMyBill | £15       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |