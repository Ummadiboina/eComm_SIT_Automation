Feature: 05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Phone' and any accessories with home
  delivery option and lands on delivery page then customer should not be displayed with end user question instead the
  customer should see GDPR consent and place an order by opting of Marketing preference 'All', then the Order consent
  profile should be created in CMT as expected

  @Web
  Scenario Outline: 05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | color      | Firstname | tariff        | BSCstatus | Surname | Username     | B1     | B2     | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | Space Grey | TEST      | 1GB Preloaded | Disabled  | ACCEPTA | TEST ACCEPTA | Select | Select | Select | Not | Enabled    | Connected  | No          | No       |
