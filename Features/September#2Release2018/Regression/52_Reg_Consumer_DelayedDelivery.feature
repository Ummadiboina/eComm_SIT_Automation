Feature: 52_Reg_Consumer_DelayedDelivery

  @Web
  Scenario Outline: CFA PayM Delayed Delivery Phones Home delivery E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    #And I search for a PayM <DD_handset> device
    And I choose PayM <DD_handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And check the status <Status> of the device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

     #Close the browser
    Examples:
      | DD_handset    | color | Firstname | Surname | Username     | Status           | BSCstatus | consumer | B1     | B2     | B3  | B4  | Text | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | iPhone 7 Plus | Black | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Enabled   | Me       | Select | Select | Not | Not | Not  | Select | Select | Select | Enabled | No        | Connected  |
