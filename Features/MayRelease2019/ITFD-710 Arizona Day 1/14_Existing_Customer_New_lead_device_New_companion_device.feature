Feature: 16_Existing_Customer_New_lead_device_New_companion_device

  @Web
  Scenario Outline: Existing_Customer_New_lead_device_New_companion_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select a color
    And click 'Choose this plan' CTA and verify if the interstitial overlay is displayed
    And Click on 'Choose an iPhone' on the overlay
    And customer lands on iPhones listing page
    And Select PayM iPhone <iphone>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
   # And select a color
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    ##Change this step
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    ##And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And I am an CFA user and Lands on shop page
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And Click 'See our plans' and verify the interstitial overlay
    And Click on 'Continue' button on interstitial overlay
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Click on 'Add and Go to Basket' button
    And Click on the 'Existing Customer checkout' CTA
    And Verify if the customer lands on lead device pairing page with the MSISDN displayed in the dropdown
    And Click on 'Begin fast checkout'
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username  | password     | Firstname | Surname | color      | device | BSCstatus | BillCap   | CapAmount | iphone     | B2     | B3  | B4  | Text   | Email  | Phone  | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent  |
      |           |              |           | Accepta | Space Grey |        | Enabled   | CapMyBill | £0        |            | Select | Not | Not | Select | Select | Select | Select | Enabled    | No        | Connected  | No          | No       |