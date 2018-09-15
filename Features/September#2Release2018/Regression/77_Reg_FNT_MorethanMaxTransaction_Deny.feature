Feature: 77_Reg_FNT_MorethanMaxTransaction_Deny

  @Web
  Scenario Outline: FNT CFA PayM Phones Click and collect scenario for More than Max Transaction
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page selecting pay device in full
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA
    And Choose all Accesssory
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    Then Order Decline page should be displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset  | color      | Capacity | Firstname | Surname | Username  | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone X | Space Grey | 256GB    | TEST      | NINE    | TEST NINE | Me       | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
