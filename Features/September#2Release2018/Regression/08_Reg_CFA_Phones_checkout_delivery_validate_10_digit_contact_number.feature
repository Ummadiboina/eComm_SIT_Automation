Feature: 08_Reg_CFA_Phones_checkout_delivery_validate_10_digit_contact_number

  This scenario ensures that the consumer shop accepts 10 digit home number

  @Web
  Scenario Outline: ConsumerToAcceptTenDigitsPhoneNumber

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #provide handset which is already set as delayed delivery
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #The below statement also checks for 0 in case of a mobile number
    And enter a <Firstname> and <Surname> and ten digit home number
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>
    #Then Verify contents of order confirmation page for Phones containing <Status>

      #Step 12 and Step 13 of ALM clubbed together
      #Close the browser
    Examples:
      | handset       | Firstname | Surname | Username     | Status           | BSCstatus | color      | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Disabled  | Space Grey | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
