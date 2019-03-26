Feature: 03_CFA_Phone_PAYGClassicTariff_Deliverypage_CNCnow_disable

  This story ensures that user is performing CFA  journey, verify the behaviour of click and collect now
  option for selected plan or device based on flag values
  @Web
  Scenario Outline: CFA PayG Phones_ClassicTariff_Deliverypage__ CNCnow_disable
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    #
    And Select classic PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Check the availability to collect from store now in Delivery page
    Then Verify that the error <string> is displayed in the deliverypage
    And click on Delivery prefrences link
    And Navigate to device details page
    And Select classic PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | color      | Firstname |tariff| BSCstatus | Surname | Username     | consumer |string| B1  | B2     | B3  | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | Space Grey | TEST    |        |Disabled  | ACCEPTA | TEST ACCEPTA | Me        |      | Not |Select | Not | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
