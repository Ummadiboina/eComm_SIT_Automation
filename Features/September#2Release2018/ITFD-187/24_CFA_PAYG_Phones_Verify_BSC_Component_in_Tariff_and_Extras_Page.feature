Feature: 24_CFA_PAYG_Phones_Verify_BSC_Component_in_Tariff_and_Extras_Page

  This scenario ensures when customer on PAYG Phone acquisition journey lands on Tariff listing page should not be displayed with BSC component

  @Web
  Scenario Outline: 24_CFA_PAYG_Phones_Verify_BSC_Component_in_Tariff_and_Extras_Page
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Select a PayG tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    And click on "go to checkout" button
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    And Continue to Review page and review the order
    And Validate consumer Bill Spend Caps section when BSC is <PayGBSCstatus>
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | color      | Firstname | tariff | PayGBSCstatus | Surname | Username     | consumer | B1  | B2     | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | Space Grey | TEST      |        | Disabled      | ACCEPTA | TEST ACCEPTA | Me       | Not | Select | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
