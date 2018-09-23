Feature: 15_Reg_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others

  This scenario ensures that when the customer on acquisition journey selects 'Phones' with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline:Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others

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
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR to click and collect
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | color | Firstname | Surname | Username     | consumer | BSCstatus | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | RED   | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Disabled  | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  |
