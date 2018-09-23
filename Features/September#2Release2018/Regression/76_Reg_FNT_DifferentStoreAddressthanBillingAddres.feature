Feature: 76_Reg_FNT_DifferentStoreAddressthanBillingAddres

  @Web
  Scenario Outline: FNT PayM Different store address than billing address
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | color      | Capacity | Firstname | BSCstatus | Surname | Username     | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post   | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | Space Grey | 64GB     | TEST      | Disabled  | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Not | Select | Not   | Not   | Select | Enabled | No        | Connected  |
