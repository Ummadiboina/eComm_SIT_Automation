Feature: 80_Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect

  @Web
  Scenario Outline: FNT CFA PayM phones Straight Order Declined
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Validate selected Click and collect store from BasketOrPD page and click on Confirm CTA in DeliveryPage and continue the CFA flow
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    Then Order Decline page should be displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset      | color | Firstname | Surname  | Username      | BSCstatus | BillCap   | CapAmount | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | KeyEvent | PreSelected |
      | Galaxy Note9 | White | TEST      | DECLINEA | TEST DECLINEA | Enabled   | CapMyBill | £200      | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No       | No          |