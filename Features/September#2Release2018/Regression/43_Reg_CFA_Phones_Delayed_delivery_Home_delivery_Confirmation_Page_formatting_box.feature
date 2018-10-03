Feature: 43_Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box

  @Web
  Scenario Outline:
  This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery,
  then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    #Step 12 and Step 13 of ALM clubbed together
    #Close the browser
    Examples:
      | handset       | Firstname | Surname | Username     | Status           | BSCstatus | color | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Enabled   | RED   | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  |
